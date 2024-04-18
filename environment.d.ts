declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DATABASE_URL: string,
            DIRECT_URL: string,
            NODE_ENV: 'development' | 'production',
            IRON_SESSION_COOKIE: string,
            IRON_SESSION_PASSWORD: string
        }
    }
}

export { }