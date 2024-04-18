import { Font, Head, Html, Tailwind } from '@react-email/components'
import { LayoutProps } from 'types/layouts'
import config from '../../tailwind.config'


export const EmailLayout = ({ children }: LayoutProps) => {
    return <Html>
        <Head>
            <Font
                fontFamily='Inter'
                fallbackFontFamily='Helvetica'
                webFont={{
                    url: 'https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2',
                    format: 'woff2'
                }}
            />
        </Head>
        <Tailwind config={config}>
            {children}
        </Tailwind>
    </Html>
}