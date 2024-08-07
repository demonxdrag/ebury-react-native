import { BottomContainer } from '../BottomContainer/BottomContainer'
import { Image } from 'expo-image'
import { ProductListStyles } from './ProductList.styles'
import { Text } from '../Text'
import { View } from '../View'

export default function ProductList() {
	const styles = ProductListStyles()
	return (
		<BottomContainer>
			<View style={styles.container}>
				<Image source={require('@/assets/images/ComingSoon.png')} contentFit='cover' style={styles.image} />
				<Text style={styles.title}>Coming Soon</Text>
				<Text style={styles.paragraph}>We are currently working in more features to offer the best experience</Text>
			</View>
		</BottomContainer>
	)
}
