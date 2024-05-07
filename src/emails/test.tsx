import { Text } from '@react-email/components'
import { EmailLayout } from './layout'

export default function Test() {
    return (
        <EmailLayout>
            <Text className='text-red-500 bg-red-50 font-mono px-3 py-2 m-5'>
                Hello world!
            </Text>
        </EmailLayout>
    )
}
