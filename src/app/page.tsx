import { list } from 'server/users'

export default async function Home() {
    const users = await list()
    const string = JSON.stringify(users, undefined, 4)

    return <pre>{string}</pre>
}
