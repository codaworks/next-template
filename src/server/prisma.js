import 'server-only'
import { PrismaClient } from '@prisma/client'

/** @type {import('@prisma/client').PrismaClient} */
const prisma = globalThis.prisma ?? new PrismaClient()

if (process.env.NODE_ENV === 'development') {
    // avoid recreation instances on hot reload
    // https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections
    globalThis.prisma = prisma
}

export { prisma }