import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'

const config = {
    cookieName: process.env.IRON_SESSION_COOKIE,
    password: process.env.IRON_SESSION_PASSWORD,
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true
    }
}

export const getSession = async (req, res) => {
    if (!req && !res)
        return await getIronSession(cookies(), config)
    return await getIronSession(req, res, config)
}
