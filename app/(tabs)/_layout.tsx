import Colors from '@/constants/Colors'
import React from 'react'
import Star from '@/assets/icons/Star'
import { TabBarStyle } from '@/styles/TabBar.styles'
import { Tabs } from 'expo-router'
import Wallet from '@/assets/icons/Wallet'
import { useClientOnlyValue } from '@/hooks/useClientOnlyValue'
import { useColorScheme } from '@/hooks/useColorScheme'

export default function TabLayout() {
	const colorScheme = useColorScheme()

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].primary,
				headerShown: useClientOnlyValue(false, true),
				tabBarStyle: TabBarStyle(colorScheme ?? 'light')
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					headerShown: false,
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => <Wallet color={color} />
				}}
			/>
			<Tabs.Screen
				name='two'
				options={{
					headerShown: false,
					tabBarLabel: 'Projects',
					tabBarIcon: ({ color }) => <Star color={color} />
				}}
			/>
		</Tabs>
	)
}
