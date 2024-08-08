import { StyleSheet } from 'react-native'

export const EmptyPageStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		gap: 32,
		paddingTop: 40
	},
	image: {
		width: 250,
		height: 194
	},
	title: {
		fontSize: 22,
		fontWeight: '400'
	},
	paragraph: {
		fontSize: 17,
		fontWeight: '400',
		textAlign: 'center'
	}
})
