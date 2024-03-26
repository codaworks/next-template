/** @type { import("drizzle-kit").Config } */
const config = {
    schema: './src/db/**/schema.js',
    driver: 'pg',
    out: './drizzle',
    dbCredentials: {
        connectionString: process.env.DIRECT_URL,
    }
}

export default config