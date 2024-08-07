import { Path, Svg } from 'react-native-svg'

import React from 'react'
import { useThemeColor } from '@/hooks/useTheme'

function Account({ color }: { color?: string }) {
	return (
		<Svg width='34' height='34' fill='none' viewBox='0 0 34 34'>
			<Path
				fill={color || useThemeColor('background')}
				d='M17 31.571c7.971 0 14.571-6.614 14.571-14.571 0-7.971-6.614-14.571-14.585-14.571-7.957 0-14.557 6.6-14.557 14.571 0 7.957 6.614 14.571 14.571 14.571zm0-2.428c-6.743 0-12.129-5.4-12.129-12.143S10.243 4.857 16.986 4.857 29.129 10.257 29.143 17c.014 6.743-5.4 12.143-12.143 12.143zm-.014-12.586c2.028.014 3.671-1.728 3.671-4.014 0-2.143-1.643-3.914-3.671-3.914-2.029 0-3.672 1.771-3.672 3.914 0 2.286 1.643 4 3.672 4.014zm-6.529 7.686h13.057c.572 0 .843-.386.843-.9 0-1.572-2.357-5.629-7.371-5.629-5.015 0-7.372 4.057-7.372 5.629 0 .514.272.9.843.9z'
			></Path>
		</Svg>
	)
}

export default Account
