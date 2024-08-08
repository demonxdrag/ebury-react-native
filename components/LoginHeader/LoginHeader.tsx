import Account from '@/assets/icons/Account'
import { View } from '../View'
import { LoginHeaderStyles as styles } from './LoginHeader.styles'

/**
 * This component contains the login icon as a header
 */
export default function LoginHeader() {
	return (
		<View style={styles.container}>
			<Account color='white'/>
		</View>
	)
}
