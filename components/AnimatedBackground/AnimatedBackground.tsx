import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated'
import { Dimensions, RefreshControl, StyleSheet } from 'react-native'

import BackgroundClouds from '@/assets/images/BackgroundClouds'
import BackgroundGradient from '@/assets/images/BackgroundGradient'
import BackgroundWave from '@/assets/images/BackgroundWave'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from '../View'
import { useWallet } from '@/api/store/Wallet.context'

type AnimatedBagroundProps = {
	children: React.ReactNode
}

/**
 * This function is a wrapper that creates an animated background behind the children.
 * It adds a basic parallax effect on the background items.
 */
export default function AnimatedBackground(props: AnimatedBagroundProps) {
	const { children } = props
	const scrollRef = useAnimatedRef<Animated.ScrollView>()
	const scrollOffset = useScrollViewOffset(scrollRef)
	const viewportHeight = Dimensions.get('window').height

	const { loading, getAll } = useWallet()

	const backgroundSlide = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: interpolate(scrollOffset.value, [-viewportHeight, 0, viewportHeight], [-viewportHeight / 2, 0, viewportHeight * -0.2]) }]
		}
	})

	const waveSlide = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: interpolate(scrollOffset.value, [-viewportHeight, 0, viewportHeight], [-viewportHeight / 2, 0, viewportHeight * -0.7]) }],
			opacity: interpolate(scrollOffset.value, [-viewportHeight, 0, viewportHeight / 2], [0, 1, 0])
		}
	})

	const cloudSlide = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: interpolate(scrollOffset.value, [-viewportHeight, 0, viewportHeight], [-viewportHeight / 2, 0, viewportHeight * -0.5]) }],
			opacity: interpolate(scrollOffset.value, [-viewportHeight, 0, viewportHeight / 2], [0, 1, 0])
		}
	})

	return (
		<View>
			<Animated.View style={[backgroundSlide, StyleSheet.absoluteFillObject]}>
				<BackgroundGradient />
			</Animated.View>
			<Animated.View style={[waveSlide, StyleSheet.absoluteFillObject, { top: '30%' }]}>
				<BackgroundWave />
			</Animated.View>
			<Animated.View style={[cloudSlide, StyleSheet.absoluteFillObject, { top: '20%', left: '90%' }]}>
				<BackgroundClouds />
			</Animated.View>
			<SafeAreaView style={{ backgroundColor: 'transparent' }}>
				<Animated.ScrollView
					style={{ minHeight: viewportHeight }}
					ref={scrollRef}
					scrollEventThrottle={16}
					refreshControl={<RefreshControl refreshing={loading} onRefresh={getAll} />}
				>
					{children}
				</Animated.ScrollView>
			</SafeAreaView>
		</View>
	)
}
