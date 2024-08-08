import { ThemeProps, useThemeColor } from '../hooks/useTheme'

import { Text as DefaultText } from 'react-native'

export type TextProps = ThemeProps & DefaultText['props']

/**
 * Custom Text component to handle theme, fonts and styles
 */
export function Text(props: TextProps) {
	const { style, ...otherProps } = props
	const color = useThemeColor('text')

	return <DefaultText style={[{ color }, style]} {...otherProps} />
}
