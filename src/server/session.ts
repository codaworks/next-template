import { SessionOptions, getIronSession } from 'iron-session'
import { cookies } from 'next/headers'

const config: SessionOptions = {
    cookieName: process.env.IRON_SESSION_COOKIE,
    password: process.env.IRON_SESSION_PASSWORD,
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true
    }
}

export const getSession = async (req: Request, res: Response) => {
    if (!req && !res)
        return await getIronSession<SessionData>(cookies() as any, config)
    return await getIronSession<SessionData>(req, res, config)
}

export interface SessionData {}
