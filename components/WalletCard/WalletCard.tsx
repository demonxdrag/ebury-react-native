import { formatAmount, formatCurrency } from '@/utils/currency.utils'

import { Flag } from '../Flag/Flag'
import { Text } from '../Text'
import { View } from '../View'
import { Wallet } from '@/api/models/Wallet.model'
import { WalletCardStyles } from './WalletCard.styles'
import { useColorScheme } from '@/hooks/useColorScheme'

type WalletCardProps = {
	item: Wallet
}
export default function WalletCard(props: WalletCardProps) {
	const { item } = props
	const colorScheme = useColorScheme()
	const styles = WalletCardStyles()

	return (
		<View style={[styles.container]}>
			<Flag currency={item.amount.currency} />
			<View style={styles.currencyContainer}>
				<Text style={styles.currency}>{item.amount.currency}</Text>
				<Text style={styles.currencyName}>{formatCurrency(item.amount.currency)}</Text>
			</View>
			<Text style={styles.amount}>{formatAmount(item.amount.amount)}</Text>
		</View>
	)
}
