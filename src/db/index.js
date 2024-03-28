
import { drizzle } from 'drizzle-orm/postgres-js'
import { Pool } from 'pg'


const client = new Pool({
    connectionString: process.env.DATABASE_URL
})

export const db = drizzle(client, {
    schema: {

    }
})