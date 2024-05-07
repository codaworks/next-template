import { orchidORM } from 'orchid-orm'
import { UserTable } from './tables/user.table'

export const db = orchidORM(
    { databaseURL: process.env.DATABASE_URL },
    {
        user: UserTable
    }
)
