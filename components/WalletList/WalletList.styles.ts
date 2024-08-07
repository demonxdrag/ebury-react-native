import { StyleSheet } from 'react-native'
import { useThemeColor } from '@/hooks/useTheme'

export const WalletListStyles = () => {
	return StyleSheet.create({
		container: {
			borderTopLeftRadius: 24,
			borderTopRightRadius: 24,
			paddingTop: 40,
			paddingHorizontal: 20,
			paddingBottom: 20,
			gap: 16,
			shadowColor: 'black',
			shadowOpacity: 0.1,
			shadowRadius: 25,
			shadowOffset: { width: 0, height: -5 },
			elevation: 20,
			minHeight: 700
		},
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
