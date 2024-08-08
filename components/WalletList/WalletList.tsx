import { BottomContainer } from '../BottomContainer/BottomContainer'
import EmptyPage from '../EmptyPage/EmptyPage'
import { Text } from '../Text'
import { View } from '../View'
import WalletCard from '../WalletCard/WalletCard'
import { WalletListStyles as styles } from './WalletList.styles'
import { useEffect } from 'react'
import { useThemeColor } from '@/hooks/useTheme'
import { useWallet } from '@/api/store/Wallet.context'

/**
 * This component is responsible for fetching and displaying a list of wallets.
 */
export default function WalletList() {
	const { wallets, loading, getAll } = useWallet()

	// This is only needed due to the nature of the ActivityIndicator being on a conditional render
	const [primary, secondary] = [useThemeColor('primary'), useThemeColor('secondary')]

	useEffect(() => {
		// Initial wallet api call
		if (!wallets?.length) getAll()
	}, [wallets])

	return (
		<BottomContainer>
			<View style={styles.header}>
				<Text style={styles.title}>Your currencies</Text>
				<Text style={(styles.subtitle, { color: loading ? secondary : primary })}>View all</Text>
			</View>
			{!wallets?.length && <EmptyPage title='No wallets' text='Add a wallet to get started' />}
			{wallets?.map(item => (
				<WalletCard key={item.account_id} item={item} />
			))}
		</BottomContainer>
	)
}
