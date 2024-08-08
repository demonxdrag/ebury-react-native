import { Wallet } from '../models/Wallet.model'

class WalletRepository {
	private baseUrl: string

	constructor(url: `/${string}`) {
		this.baseUrl = `${process.env.EXPO_PUBLIC_API_URL}${url}`
	}

	get = async (path: `/${string}`): Promise<Wallet | null> => {
		const url = new URL(`${this.baseUrl}${path}`)

		try {
			const res = await fetch(url)

			// Basic status handling
			if (res.status !== 200) return null

			const resJson = await res.json()
			return resJson
		} catch {
			return null
		}
	}

	getAll = async (path: `/`): Promise<Wallet[]> => {
		const url = new URL(`${this.baseUrl}${path}`)
		try {
			const res = await fetch(url)

			// Basic status handling
			if (res.status !== 200) return []

			const resJson = await res.json()
			return resJson
		} catch {
			return []
		}
	}

	post = async (path: `/`, payload: Wallet): Promise<Wallet | null> => {
		const url = `${this.baseUrl}${path}`
		try {
			const res = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(payload)
			})

			// Basic status handling
			if (res.status !== 201) return null

			const resJson = await res.json()
			return resJson
		} catch {
			return null
		}
	}

	put = async (path: `/${string}`, payload: Partial<Wallet>): Promise<Wallet | null> => {
		const url = `${this.baseUrl}${path}`
		try {
			const res = await fetch(url, {
				method: 'PUT',
				body: JSON.stringify(payload)
			})

			// Basic status handling
			if (res.status !== 200) return null

			const resJson = await res.json()
			return resJson
		} catch {
			return null
		}
	}

	delete = async (path: `/${string}`): Promise<Wallet | null> => {
		const url = `${this.baseUrl}${path}`
		try {
			const res = await fetch(url, {
				method: 'DELETE'
			})
			
			// Basic status handling
			if (res.status !== 200) return null

			const resJson = await res.json()
			return resJson
		} catch {
			return null
		}
	}
}

export default WalletRepository
