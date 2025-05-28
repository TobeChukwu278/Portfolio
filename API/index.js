import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
const app = express();

app.use(cors()); // Allow CORS for local development

app.get('/api/news', async (req, res) => {
    try {
        const response = await fetch('https://newsapi.org/v2/everything?q=developer+google&language=en&sortBy=publishedAt&pageSize=4&apiKey=1e123be6f5c54f65ae2dfaab1e614643');
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

app.listen(5000, () => console.log('API server running on port 5000'));