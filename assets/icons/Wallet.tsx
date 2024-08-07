import { Path, Svg } from 'react-native-svg'

import React from 'react'
import { useThemeColor } from '@/hooks/useTheme'

function Wallet({ color }: { color?: string }) {
	return (
		<Svg width='28' height='28' fill='none' viewBox='0 0 28 28'>
			<Path
				fill={color || useThemeColor('secondary')}
				fillRule='evenodd'
				d='M20 5c1.103 0 2 .897 2 2v2c1.103 0 2 .897 2 2v10c0 1.103-.897 2-2 2H7c-1.206 0-3-.799-3-3V8c0-1.654 1.346-3 3-3h13zm0 2H7a1.001 1.001 0 000 2h13V7zM7.012 21H22V11H7c-.353 0-.686-.072-1-.185V20c0 .805.55.988 1.012 1zM20 14h-2v4h2v-4z'
				clipRule='evenodd'
			></Path>
		</Svg>
	)
}

export default Wallet
