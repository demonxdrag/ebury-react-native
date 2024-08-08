import { Currency } from '@/api/models/Wallet.model'
import { flags } from '@/assets/flags'
import { useColorScheme } from 'react-native'

// Util to change a currency from it's standard code into human readable text
// The better way to do this would be using a library like i18n
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

// Util to get the flag image based on the currency
export const getFlag = (currency?: Currency) => {
	const colorScheme = useColorScheme()
	if (currency) return flags[currency]
	else {
		if (colorScheme === 'light') return require('../assets/flags/Default-light.png')
		if (colorScheme === 'dark') return require('../assets/flags/Default-dark.png')
	}
}

// Util to format a monetary amount
export const formatAmount = (amount: string) => {
	return parseFloat(amount).toFixed(2)
}
