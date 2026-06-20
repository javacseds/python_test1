require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' })); // To handle large base64 PDFs

// Temporary in-memory store for OTPs (RollNumber -> { otp, email, timestamp })
const otpStore = {};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER || 'javacsedscs@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

app.post('/send-otp', async (req, res) => {
    const { roll, email } = req.body;
    if (!roll || !email) return res.status(400).json({ error: 'Roll and Email required' });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[roll] = { otp, email, timestamp: Date.now() };

    try {
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

app.post('/verify-otp', (req, res) => {
    const { roll, code } = req.body;
    const record = otpStore[roll];

    if (!record) return res.status(400).json({ error: 'No OTP requested for this roll number' });
    if (Date.now() - record.timestamp > 10 * 60 * 1000) return res.status(400).json({ error: 'OTP expired' });
    
    if (record.otp === code) {
        delete otpStore[roll]; // Validated
        res.json({ success: true, message: 'Verified' });
    } else {
        res.status(400).json({ error: 'Invalid OTP' });
    }
});

app.post('/send-pdf', async (req, res) => {
    const { toEmail, pdfBase64, filename, isConsolidated } = req.body;
    
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Ensure you have set GMAIL_APP_PASSWORD in your .env file!');
});
