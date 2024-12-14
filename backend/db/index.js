import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.connect().then(client => {
    console.log('Database connected successfully.');
    client.release();
}).catch(err => {
    console.error('Database connection error:', err.stack);
});

export default {
    query: (text, params) => pool.query(text, params),
};
