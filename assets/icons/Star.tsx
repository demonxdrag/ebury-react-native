import { Path, Svg } from 'react-native-svg'

import React from 'react'
import { useThemeColor } from '@/hooks/useTheme'

function Star({ color }: { color?: string }) {
	return (
		<Svg width='28' height='28' fill='none' viewBox='0 0 28 28'>
			<Path
				fill={color || useThemeColor('secondary')}
				d='M6.605 25.738c.443.346 1.005.227 1.675-.26l5.717-4.204 5.727 4.204c.67.487 1.221.605 1.675.26.443-.335.54-.886.27-1.675l-2.258-6.722 5.77-4.15c.67-.476.94-.973.768-1.513-.173-.519-.68-.778-1.513-.767l-7.078.043L15.207 4.2c-.26-.8-.648-1.2-1.21-1.2-.552 0-.94.4-1.2 1.2l-2.15 6.754-7.079-.043c-.832-.011-1.34.248-1.513.767-.184.54.097 1.037.767 1.513l5.771 4.15-2.258 6.722c-.27.789-.173 1.34.27 1.675zm1.556-2.14c-.022-.022-.01-.032 0-.097l2.15-6.182c.152-.421.065-.756-.313-1.016l-5.382-3.717c-.054-.033-.065-.054-.054-.087.011-.032.033-.032.098-.032l6.538.119c.443.01.724-.173.864-.616l1.88-6.257c.011-.065.033-.087.055-.087.032 0 .054.022.065.087l1.88 6.257c.14.443.421.627.864.616l6.539-.12c.064 0 .086 0 .097.033.01.033-.011.054-.054.087l-5.382 3.717c-.378.26-.465.595-.313 1.016l2.15 6.182c.011.064.022.075 0 .097-.021.032-.054.01-.097-.022l-5.198-3.966c-.346-.27-.746-.27-1.092 0l-5.198 3.966c-.043.033-.075.054-.097.022z'
			></Path>
		</Svg>
	)
}

export default Star
