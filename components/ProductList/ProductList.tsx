import { BottomContainer } from '../BottomContainer/BottomContainer'
import EmptyPage from '../EmptyPage/EmptyPage'

/**
 * This component is responsible for displaying a list of products.
 * However this feature is not yet available so a placeholder is shown instead.
 */
export default function ProductList() {
	return (
		<BottomContainer>
			<EmptyPage title='Coming Soon' text='We are currently working in more features to offer the best experience' />
		</BottomContainer>
	)
}
