import { Text } from '../Text'
import { View } from '../View'
import { WelcomeTitleStyles as styles } from './WelcomeTitle.styles'

export type WelcomeTitleType = {
	title: string
	subtitle?: string
}

/**
 * This component has the title and subtitle to be shown in the main views of the app.
 */
export default function WelcomeTitle(props: WelcomeTitleType) {
	const { title, subtitle } = props
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			{subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
		</View>
	)
}
