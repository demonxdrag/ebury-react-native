import { StyleSheet } from 'react-native'
import { useThemeColor } from '@/hooks/useTheme'

export const WalletListStyles = () => {
	return StyleSheet.create({
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
			fontSize: 17,
			color: useThemeColor('primary')
		}
	})
}
