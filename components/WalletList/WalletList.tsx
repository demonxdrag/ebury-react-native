import { BottomContainer } from '../BottomContainer/BottomContainer'
import Colors from '@/constants/Colors'
import { Mock } from './WalletList.mock'
import { Text } from '../Text'
import { View } from '../View'
import WalletCard from '../WalletCard/WalletCard'
import { WalletListStyles } from './WalletList.styles'

export default function WalletList() {
	const styles = WalletListStyles()
	return (
		<BottomContainer>
			<View style={styles.header}>
				<Text style={styles.title}>Your currencies</Text>
				<Text style={styles.subtitle} lightColor={Colors['light'].primary} darkColor={Colors['dark'].primary}>
					View all
				</Text>
			</View>
			{Mock.map(item => (
				<WalletCard key={item.account_id} item={item} />
			))}
		</BottomContainer>
	)
}
