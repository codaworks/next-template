import { Inter } from 'next/font/google'
import 'styles/index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    // Chrome extensions mess with classnames and attributes, disable warnings
    return <html lang="en" suppressHydrationWarning>
        <body className={inter.className} suppressHydrationWarning>
            {children}
        </body>
    </html>
}
