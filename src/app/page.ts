import { list } from 'server/users'

export default async function Home() {
    const users = await list()

    return JSON.stringify(users)
}
