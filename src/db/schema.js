import { pgTable, serial, text } from 'drizzle-orm/pg-core'

export const user = pgTable('account_user', {
    id: serial('id').primaryKey(),
    firstName: text('first_name'),
    lastName: text('last_name'),
    email: text('email')
})