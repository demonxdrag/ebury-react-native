import { ThemeProps, useThemeColor } from '../hooks/useTheme'

import { View as DefaultView } from 'react-native'

export type ViewProps = ThemeProps & DefaultView['props']

/**
 * Custom View component to handle theme and general styles
 */
export function View(props: ViewProps) {
	const { style, ...otherProps } = props
	const backgroundColor = useThemeColor('background')

	return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}
