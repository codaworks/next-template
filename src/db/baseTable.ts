import { createBaseTable } from 'orchid-orm'

export const BaseTable = createBaseTable({
    snakeCase: true,

    columnTypes: t => ({
        ...t,
        timestamp: (precision?: number) => t.timestamp(precision).asDate(),
        defaults: () => ({
            id: t.identity().primaryKey(),
            created: t.timestamps().createdAt.asDate(),
            updated: t.timestamps().updatedAt.asDate()
        })
    })
})
