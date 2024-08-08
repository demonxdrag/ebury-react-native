import { StyleSheet } from 'react-native'

export const WalletCardStyles = StyleSheet.create({
	container: {
		padding: 16,
		gap: 8,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 8,
		shadowColor: 'black',
		shadowOpacity: 0.1,
		shadowRadius: 6,
		shadowOffset: { width: 0, height: 3 },
		elevation: 5
	},
	currencyContainer: {
		flex: 1,
		gap: 4,
		backgroundColor: 'transparent'
	},
	flag: {
		height: 50,
		width: 50
	},
	amount: {
		fontSize: 20,
		fontWeight: 600
	},
	currency: {
		fontSize: 17,
		fontWeight: 600
	},
	currencyName: {
		fontSize: 15,
		fontWeight: 400
	}
})
