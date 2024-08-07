import { BottomContainer } from '../BottomContainer/BottomContainer'
import { Text } from '../Text'
import { View } from '../View'
import WalletCard from '../WalletCard/WalletCard'
import { WalletListStyles } from './WalletList.styles'
import { useEffect } from 'react'
import { useWallet } from '@/api/store/Wallet.context'

export default function WalletList() {
	const styles = WalletListStyles()
	const { wallets, getAll } = useWallet()

	useEffect(() => {
		if (!wallets) getAll()
	}, [])

	return (
		<BottomContainer>
			<View style={styles.header}>
				<Text style={styles.title}>Your currencies</Text>
				<Text style={styles.subtitle}>View all</Text>
			</View>
			{wallets?.map(item => (
				<WalletCard key={item.account_id} item={item} />
			))}
		</BottomContainer>
	)
}
