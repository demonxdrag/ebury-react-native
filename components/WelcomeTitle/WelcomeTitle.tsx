import { Text } from '../Text'
import { View } from '../View'
import { WelcomeTitleStyles as styles } from './WelcomeTitle.styles'

export default function WelcomeTitle() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome</Text>
			<Text style={styles.subtitle}>Company Name</Text>
		</View>
	)
}
