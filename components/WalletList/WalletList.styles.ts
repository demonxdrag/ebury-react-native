import { StyleSheet } from 'react-native'

export const WalletListStyles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	title: {
		fontSize: 17,
		fontWeight: '500'
	},
	subtitle: {
		fontSize: 17
	},
	loading: {
		height: 200,
		justifyContent: 'flex-end',
		alignItems: 'center'
	}
})
