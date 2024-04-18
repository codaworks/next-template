import { appCodeUpdater } from 'orchid-orm/codegen'
import { rakeDb } from 'rake-db'
import { BaseTable } from './baseTable'

export const change = rakeDb({ databaseURL: process.env.DIRECT_URL }, {
    baseTable: BaseTable,
    snakeCase: true,
    migrationsTable: 'migrations',
    migrationsPath: './migrations',
    appCodeUpdater: appCodeUpdater({
        tablePath: (tableName) => `./tables/${tableName}.table.ts`,
        ormPath: './db.ts',
    }),
    useCodeUpdater: process.env.NODE_ENV === 'development',
    commands: {
        async seed() {
            const { seed } = await import('./seed')
            await seed()
        }
    },
    import: (path) => import(path)
})
