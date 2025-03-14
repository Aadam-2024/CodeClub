import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: 'tQQ1V73QYrNWk7Rl',
  host: 'proudly-merry-pitta.data-1.use1.tembo.io',
  port: '5432',
  database: 'postgres',
});

export async function query(text, params) {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('executed query', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Error executing query', { text, error });
    throw error;
  }
}