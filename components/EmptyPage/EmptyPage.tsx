import { Image } from 'expo-image'
import { Text } from '../Text'
import { View } from '../View'
import { EmptyPageStyles as styles } from './EmptyPage.styles'

type EmptyPageType = {
	title: string
	text: string
}

/**
 * Illustration to be used when no items of any sort are available or when a feature is
 * yet to be implemented.
 */
export default function EmptyPage(props: EmptyPageType) {
	const { title, text } = props
	return (
		<View style={styles.container}>
			<Image source={require('@/assets/images/ComingSoon.png')} contentFit='cover' style={styles.image} />
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.paragraph}>{text}</Text>
		</View>
	)
}
