import AnimatedBackground from '@/components/AnimatedBackground/AnimatedBackground'
import LoginHeader from '@/components/LoginHeader/LoginHeader'
import React from 'react'
import { View } from '@/components/View'
import WalletList from '@/components/WalletList/WalletList'
import WelcomeTitle from '@/components/WelcomeTitle/WelcomeTitle'
import { HomeStyles as styles } from './Home.styles'

export default function Home() {
	return (
		<View style={styles.container}>
			<AnimatedBackground>
				<LoginHeader />
				<WelcomeTitle />
				<WalletList />
			</AnimatedBackground>
		</View>
	)
}
