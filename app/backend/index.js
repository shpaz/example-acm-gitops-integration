const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3001;

const pool = new Pool({
    user: 'postgres',
    host: 'full-stack-db',  // Service name in Kubernetes
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

app.get('/api', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error connecting to the database');
    }
});

app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
});

