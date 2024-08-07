import BackgroundWave from '@/assets/images/BackgroundWave'
import EditScreenInfo from '@/components/EditScreenInfo'
import { StyleSheet } from 'react-native'
import { Text } from '@/components/Text'
import { View } from '@/components/View'

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tab One</Text>
			<View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
			<BackgroundWave />
			<EditScreenInfo path='app/(tabs)/index.tsx' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%'
	}
})
