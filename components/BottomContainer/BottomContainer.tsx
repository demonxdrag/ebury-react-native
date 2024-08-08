import { View } from '../View'
import { BottomContainerStyles as styles } from './BottomContainer.styles'

type BottomContainerType = {
	children: React.ReactNode
}

/**
 * Simple component to handle the bottom container of the app.
 */
export const BottomContainer = (props: BottomContainerType) => {
	const { children } = props

	return <View style={styles.container}>{children}</View>
}
