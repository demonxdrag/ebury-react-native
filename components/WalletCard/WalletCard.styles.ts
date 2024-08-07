import { StyleSheet } from 'react-native'
import { useThemeColor } from '@/hooks/useTheme'

export const WalletCardStyles = () => {
	return StyleSheet.create({
		container: {
			padding: 16,
			backgroundColor: useThemeColor('paper'),
			gap: 8,
			flexDirection: 'row',
			alignItems: 'center',
			borderRadius: 8,
			shadowColor: 'black',
			shadowOpacity: 0.10,
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
			fontWeight: 600,
			color: useThemeColor('text')
		},
		currency: {
			fontSize: 17,
			fontWeight: 600,
			color: useThemeColor('text')
		},
		currencyName: {
			fontSize: 15,
			fontWeight: 400,
			color: useThemeColor('secondary')
		}
	})
}
