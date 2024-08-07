import { Text } from '../Text'
import { View } from '../View'
import { WelcomeTitleStyles as styles } from './WelcomeTitle.styles'

export type WelcomeTitleType = {
	title: string
	subtitle?: string
}
export default function WelcomeTitle(props: WelcomeTitleType) {
	const { title, subtitle } = props
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			{subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
		</View>
	)
}
