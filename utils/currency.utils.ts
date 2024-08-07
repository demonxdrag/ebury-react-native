import { Currency } from '@/api/models/Wallet.model'
import { flags } from '@/assets/flags'
import { useColorScheme } from 'react-native'

export const formatCurrency = (currency: Currency): string => {
	switch (currency) {
		case 'USD':
			return 'US Dollar'
		case 'EUR':
			return 'Euro'
		case 'GBP':
			return 'British Pound'
		default:
			return currency
	}
}

export const getFlag = (currency?: Currency) => {
	const colorScheme = useColorScheme()
	if (currency) return flags[currency]
	else {
		if (colorScheme === 'light') return require('../assets/flags/Default-light.png')
		if (colorScheme === 'dark') return require('../assets/flags/Default-dark.png')
	}
}

export const formatAmount = (amount: string) => {
	return parseFloat(amount).toFixed(2)
}
