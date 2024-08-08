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

	const animationStart = -viewportHeight
	const animationStartRatio = viewportHeight
	const animationStop = 0
	const animationStopValue = 0

	const opacityStart = -viewportHeight
	const opacityStartRatio = viewportHeight / 2
	const opacityStop = 0
	const opacityStopValue = 1
	const opacityEnd = 0
	const opacityEndRatio = 0

	const backgroundSlide = useAnimatedStyle(() => {
		const animationEnd = -viewportHeight / 2
		const animationEndRatio = viewportHeight * -0.2
		return {
			transform: [
				{
					translateY: interpolate(
						scrollOffset.value,
						[animationStart, animationStop, animationStartRatio],
						[animationEnd, animationStopValue, animationEndRatio]
					)
				}
			]
		}
	})

	const waveSlide = useAnimatedStyle(() => {
		const animationEnd = -viewportHeight / 2
		const animationEndRatio = viewportHeight * -0.7
		return {
			transform: [
				{
					translateY: interpolate(
						scrollOffset.value,
						[animationStart, animationStop, animationStartRatio],
						[animationEnd, animationStopValue, animationEndRatio]
					)
				}
			],
			opacity: interpolate(scrollOffset.value, [opacityStart, opacityStop, opacityStartRatio], [opacityEnd, opacityStopValue, opacityEndRatio])
		}
	})

	const cloudSlide = useAnimatedStyle(() => {
		const animationEnd = -viewportHeight / 2
		const animationEndRatio = viewportHeight * -0.5
		return {
			transform: [
				{
					translateY: interpolate(
						scrollOffset.value,
						[animationStart, animationStop, animationStartRatio],
						[animationEnd, animationStopValue, animationEndRatio]
					)
				}
			],
			opacity: interpolate(scrollOffset.value, [opacityStart, opacityStop, opacityStartRatio], [opacityEnd, opacityStopValue, opacityEndRatio])
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
