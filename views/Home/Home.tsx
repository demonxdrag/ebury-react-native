import AnimatedBackground from '@/components/AnimatedBackground/AnimatedBackground'
import LoginHeader from '@/components/LoginHeader/LoginHeader'
import React from 'react'
import { View } from '@/components/View'
import WalletList from '@/components/WalletList/WalletList'
import { WalletProvider } from '@/api/store/Wallet.context'
import WelcomeTitle from '@/components/WelcomeTitle/WelcomeTitle'
import { HomeStyles as styles } from './Home.styles'

/**
 * Main view of the app
 * Contains the wallet list and the login header
 */
export default function Home() {
	return (
		<View style={styles.container}>
			<WalletProvider>
				<AnimatedBackground>
					<LoginHeader />
					<WelcomeTitle title='Welcome' subtitle='Company Name' />
					<WalletList />
				</AnimatedBackground>
			</WalletProvider>
		</View>
	)
}
