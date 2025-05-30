// app/lib/db.ts
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
});

export const db = {
    query: (text: string, params?: any[]) => pool.query(text, params),
    connect: () => pool.connect(),
};
