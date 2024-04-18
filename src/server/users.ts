'use server'

import { db } from 'db/db'

export const list = async () => {
    return await db.user
}