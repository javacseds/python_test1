const app = require('./api/index.js');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Ensure you have set GMAIL_APP_PASSWORD and DATABASE_URL in your .env file!');
});
