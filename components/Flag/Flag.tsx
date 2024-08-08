import { Currency } from '@/api/models/Wallet.model'
import { Image } from 'expo-image'
import { View } from '../View'
import { getFlag } from '@/utils/currency.utils'
import { FlagStyles as styles } from './Flag.styles'

type FlagType = {
	currency: Currency
}

/**
 * Component that renders a flag image based on the currency code.
 */
export const Flag = (props: FlagType) => {
	const { currency } = props

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={getFlag(currency)} contentFit='cover' />
		</View>
	)
}
