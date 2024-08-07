import { StyleSheet } from 'react-native'
import { useThemeColor } from '@/hooks/useTheme'

export const ProductListStyles = () => {
	return StyleSheet.create({
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
			color: useThemeColor('secondary'),
			textAlign: 'center'
		}
	})
}
