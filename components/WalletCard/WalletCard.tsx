import { formatAmount, formatCurrency } from '@/utils/currency.utils'

import { Flag } from '../Flag/Flag'
import { Text } from '../Text'
import { View } from '../View'
import { Wallet } from '@/api/models/Wallet.model'
import { WalletCardStyles as styles } from './WalletCard.styles'
import { useThemeColor } from '@/hooks/useTheme'

type WalletCardProps = {
	item: Wallet
}

/**
 * This component is responsible for displaying a single wallet.
 */
export default function WalletCard(props: WalletCardProps) {
	const { item } = props

	return (
		<View style={[styles.container, { backgroundColor: useThemeColor('paper') }]}>
			<Flag currency={item.amount.currency} />
			<View style={styles.currencyContainer}>
				<Text style={styles.currency}>{item.amount.currency}</Text>
				<Text style={(styles.currencyName, { color: useThemeColor('secondary') })}>{formatCurrency(item.amount.currency)}</Text>
			</View>
			<Text style={styles.amount}>{formatAmount(item.amount.amount)}</Text>
		</View>
	)
}
