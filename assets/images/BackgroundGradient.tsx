import { Defs, LinearGradient, Rect, Stop, Svg } from 'react-native-svg'

import React from 'react'
import { StyleSheet } from 'react-native'
import { useThemeColor } from '@/hooks/useTheme'

function BackgroundGradient() {
	return (
		<Svg height='100%' width='100%' style={StyleSheet.absoluteFillObject}>
			<Defs>
				<LinearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='40%'>
					<Stop offset='0' stopColor={useThemeColor('gradientEnd')} />
					<Stop offset='1' stopColor={useThemeColor('gradientStart')} />
				</LinearGradient>
			</Defs>
			<Rect width='100%' height='100%' fill='url(#grad)' />
		</Svg>
	)
}

export default BackgroundGradient
