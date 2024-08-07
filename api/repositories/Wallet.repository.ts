import { Wallet } from "../models/Wallet.model"

class WalletRepository {
	private baseUrl: string

	constructor(url: `/${string}`) {
		this.baseUrl = `${process.env.EXPO_PUBLIC_API_URL}${url}`
	}

	get = async (path: `/${string}`): Promise<Wallet> => {
		const url = new URL(`${this.baseUrl}${path}`)

		const res = await fetch(url)
		const resJson = await res.json()

		return resJson.data
	}

	getAll = async (path: `/`): Promise<Wallet[]> => {
		const url = new URL(`${this.baseUrl}${path}`)

		const res = await fetch(url)
		const resJson = await res.json()

		return resJson.data
	}

	post = async (path: `/`, payload: Wallet) => {
		const url = `${this.baseUrl}${path}`

		const res = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(payload)
		})

		const resJson = await res.json()

		return resJson.data
	}

	put = async (path: `/${string}`, payload: Partial<Wallet>) => {
		const url = `${this.baseUrl}${path}`

		const res = await fetch(url, {
			method: 'PUT',
			body: JSON.stringify(payload)
		})

		const resJson = await res.json()

		return resJson.data
	}

	delete = async (path: `/${string}`) => {
		const url = `${this.baseUrl}${path}`

		const res = await fetch(url, {
			method: 'DELETE'
		})

		const resJson = await res.json()

		return resJson.data
	}
}

export default WalletRepository
