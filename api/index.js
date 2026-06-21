require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// PostgreSQL Pool Connection
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// Setup tables automatically on load
const initDbPromise = pool.query(`
    CREATE TABLE IF NOT EXISTS results (
        roll VARCHAR(50) PRIMARY KEY,
        name VARCHAR(100),
        branch VARCHAR(100),
        marks INTEGER DEFAULT 0,
        attempts INTEGER DEFAULT 0,
        status VARCHAR(50) DEFAULT 'ACTIVE',
        timestamp VARCHAR(100),
        question_details JSONB,
        time_taken INTEGER DEFAULT 0,
        last_active_str VARCHAR(100),
        last_sync_str VARCHAR(100)
    );
    CREATE TABLE IF NOT EXISTS otps (
        roll VARCHAR(50) PRIMARY KEY,
        otp VARCHAR(10),
        email VARCHAR(150),
        timestamp BIGINT
    );
`).then(() => {
    console.log("Database tables verified/created successfully.");
}).catch(err => {
    console.error("Database connection initialization failed:", err);
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER || 'javacsedscs@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

// API Routes

app.post('/api/send-otp', async (req, res) => {
    await initDbPromise;
    const { roll, email } = req.body;
    if (!roll || !email) return res.status(400).json({ error: 'Roll and Email required' });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const timestamp = Date.now();

    try {
        // Save OTP to PostgreSQL database to prevent serverless session loss
        await pool.query(`
            INSERT INTO otps (roll, otp, email, timestamp) 
            VALUES ($1, $2, $3, $4)
            ON CONFLICT (roll) DO UPDATE SET 
                otp = EXCLUDED.otp, 
                email = EXCLUDED.email, 
                timestamp = EXCLUDED.timestamp;
        `, [roll, otp, email, timestamp]);

        await transporter.sendMail({
            from: process.env.GMAIL_USER || 'javacsedscs@gmail.com',
            to: email,
            subject: 'Python Assessment Login Verification',
            text: `Your verification code is: ${otp}. It will expire in 10 minutes.`
        });
        res.json({ success: true, message: 'OTP sent successfully' });
    } catch (error) {
        console.error('Error sending OTP:', error);
        res.status(500).json({ error: 'Failed to send OTP' });
    }
});

app.post('/api/verify-otp', async (req, res) => {
    await initDbPromise;
    const { roll, code } = req.body;
    if (!roll || !code) return res.status(400).json({ error: 'Roll and Code required' });

    try {
        const result = await pool.query('SELECT * FROM otps WHERE roll = $1', [roll]);
        if (result.rows.length === 0) {
            return res.status(400).json({ error: 'No OTP requested for this roll number' });
        }
        
        const record = result.rows[0];
        if (Date.now() - Number(record.timestamp) > 10 * 60 * 1000) {
            return res.status(400).json({ error: 'OTP expired' });
        }
        
        if (record.otp === code) {
            await pool.query('DELETE FROM otps WHERE roll = $1', [roll]); // Validated
            res.json({ success: true, message: 'Verified' });
        } else {
            res.status(400).json({ error: 'Invalid OTP' });
        }
    } catch (error) {
        console.error('Error verifying OTP:', error);
        res.status(500).json({ error: 'Failed to verify OTP' });
    }
});

app.post('/api/send-pdf', async (req, res) => {
    const { toEmail, pdfBase64, filename, isConsolidated } = req.body;
    if (!toEmail || !pdfBase64) return res.status(400).json({ error: 'Email and PDF required' });
    
    const mailOptions = {
        from: process.env.GMAIL_USER || 'javacsedscs@gmail.com',
        to: toEmail,
        subject: isConsolidated ? 'Consolidated Assessment Report' : 'Your Python Assessment Report',
        text: isConsolidated ? 'Please find the consolidated report attached.' : 'Please find your individual assessment report attached.',
        attachments: [
            {
                filename: filename || 'report.pdf',
                content: pdfBase64.split("base64,")[1], // Remove the data URI prefix
                encoding: 'base64'
            }
        ]
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending PDF:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

// Sync results / progress / heartbeat to PostgreSQL
app.post('/api/results', async (req, res) => {
    await initDbPromise;
    const { 
        roll, name, branch, marks, attempts, status, 
        timestamp, questionDetails, timeTaken, lastActiveStr, lastSyncStr 
    } = req.body;

    if (!roll) return res.status(400).json({ error: 'Roll number required' });

    try {
        const query = `
            INSERT INTO results (
                roll, name, branch, marks, attempts, status, 
                timestamp, question_details, time_taken, last_active_str, last_sync_str
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
            ON CONFLICT (roll) DO UPDATE SET
                name = COALESCE(EXCLUDED.name, results.name),
                branch = COALESCE(EXCLUDED.branch, results.branch),
                marks = COALESCE(EXCLUDED.marks, results.marks),
                attempts = COALESCE(EXCLUDED.attempts, results.attempts),
                status = COALESCE(EXCLUDED.status, results.status),
                timestamp = COALESCE(EXCLUDED.timestamp, results.timestamp),
                question_details = COALESCE(EXCLUDED.question_details, results.question_details),
                time_taken = COALESCE(EXCLUDED.time_taken, results.time_taken),
                last_active_str = COALESCE(EXCLUDED.last_active_str, results.last_active_str),
                last_sync_str = COALESCE(EXCLUDED.last_sync_str, results.last_sync_str);
        `;
        await pool.query(query, [
            roll, name || null, branch || null, marks || 0, attempts || 0, status || 'ACTIVE',
            timestamp || null, questionDetails ? JSON.stringify(questionDetails) : null,
            timeTaken || 0, lastActiveStr || null, lastSyncStr || null
        ]);
        res.json({ success: true, message: 'Result synced successfully' });
    } catch (error) {
        console.error('Error saving result:', error);
        res.status(500).json({ error: 'Database write failed' });
    }
});

// Fetch all student records
app.get('/api/results', async (req, res) => {
    await initDbPromise;
    try {
        const result = await pool.query('SELECT * FROM results');
        const mapped = {};
        result.rows.forEach(row => {
            mapped[row.roll] = {
                roll: row.roll,
                name: row.name,
                branch: row.branch,
                marks: row.marks,
                attempts: row.attempts,
                status: row.status,
                timestamp: row.timestamp,
                questionDetails: typeof row.question_details === 'string' ? JSON.parse(row.question_details) : row.question_details,
                timeTaken: row.time_taken,
                lastActiveStr: row.last_active_str,
                lastSyncStr: row.last_sync_str
            };
        });
        res.json(mapped);
    } catch (error) {
        console.error('Error fetching results:', error);
        res.status(500).json({ error: 'Database read failed' });
    }
});

// Fetch a single student record
app.get('/api/results/:roll', async (req, res) => {
    await initDbPromise;
    const { roll } = req.params;
    try {
        const result = await pool.query('SELECT * FROM results WHERE roll = $1', [roll]);
        if (result.rows.length === 0) {
            return res.json({ exists: false });
        }
        const row = result.rows[0];
        res.json({
            exists: true,
            data: {
                roll: row.roll,
                name: row.name,
                branch: row.branch,
                marks: row.marks,
                attempts: row.attempts,
                status: row.status,
                timestamp: row.timestamp,
                questionDetails: typeof row.question_details === 'string' ? JSON.parse(row.question_details) : row.question_details,
                timeTaken: row.time_taken,
                lastActiveStr: row.last_active_str,
                lastSyncStr: row.last_sync_str
            }
        });
    } catch (error) {
        console.error('Error fetching single result:', error);
        res.status(500).json({ error: 'Database read failed' });
    }
});

module.exports = app;
