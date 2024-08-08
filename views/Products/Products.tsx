import AnimatedBackground from '@/components/AnimatedBackground/AnimatedBackground'
import ProductList from '@/components/ProductList/ProductList'
import React from 'react'
import { View } from '@/components/View'
import WelcomeTitle from '@/components/WelcomeTitle/WelcomeTitle'
import { ProductsStyles as styles } from './Products.styles'

/**
 * Main view of the app
 * Contains the product list
 * Currently under development
 */
export default function Products() {
	return (
		<View style={styles.container}>
			<AnimatedBackground>
				<WelcomeTitle title='Products' />
				<ProductList />
			</AnimatedBackground>
		</View>
	)
}
