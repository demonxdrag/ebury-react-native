import { ActivityIndicator } from 'react-native'
import { View } from '../View'
import { LoadingStyles as styles } from './Loading.styles'
import { useThemeColor } from '@/hooks/useTheme'

type LoadingType = {
	loading: boolean
	children: React.ReactNode
}
export default function Loading(props: LoadingType) {
	const { loading, children } = props
	const color = useThemeColor('primary')

	return loading ? (
		<View style={styles.loading}>
			<ActivityIndicator color={color} size='large' />
		</View>
	) : (
		<View>{children}</View>
	)
}
