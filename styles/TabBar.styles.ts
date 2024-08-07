import Colors from '@/constants/Colors'
import { ViewStyle } from 'react-native'

export const TabBarStyle = (colorScheme: 'light' | 'dark'): ViewStyle => ({
	shadowColor: 'black',
	shadowOpacity: 0.15,
	shadowRadius: 10,
	borderTopLeftRadius: 10,
	borderTopRightRadius: 10,
	borderWidth: 0,
	backgroundColor: Colors[colorScheme].paper,
	paddingTop: 16,
	paddingBottom: 32,
	height: 89
})
