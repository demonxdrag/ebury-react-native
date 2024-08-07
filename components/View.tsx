import { ThemeProps, useThemeColor } from '../hooks/useTheme'

import { View as DefaultView } from 'react-native'

export type ViewProps = ThemeProps & DefaultView['props']

export function View(props: ViewProps) {
	const { style, ...otherProps } = props
	const backgroundColor = useThemeColor('background')

	return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}
