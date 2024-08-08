import React from 'react'
import { Wallet } from '../models/Wallet.model'
import WalletRepository from '../repositories/Wallet.repository'

/**
 * The purpose of this context is to provide both access to the wallets as well as
 * givea ccess to the CRUD repository to control the wallets state.
 *
 * The idea of a context like this is to centralize everything regarding the data
 * structure and the data store into a single point of access.
 */

export const WalletContext = React.createContext<{
	wallets?: Wallet[]
	loading: boolean
	get: (id: string) => void
	getAll: () => void
	create: (wallet: Wallet) => void
	update: (wallet: Wallet) => void
	delete: (id: string) => void
}>({
	wallets: [],
	loading: false,
	get: async () => null,
	getAll: async () => [],
	create: async () => null,
	update: async () => null,
	delete: async () => null
})

export function useWallet() {
	const value = React.useContext(WalletContext)
	if (process.env.NODE_ENV !== 'production') {
		if (!value) {
			throw new Error('useWallet must be wrapped in a <WalletProvider />')
		}
	}

	return value
}

export function WalletProvider(props: React.PropsWithChildren) {
	const [wallets, setWallets] = React.useState<Wallet[]>([])
	const [loading, setLoading] = React.useState(false)

	const repository = new WalletRepository('/wallets')

	const get = async (id: string) => {
		setLoading(true)
		const response = await repository.get(`/${id}`)
		if (response) {
			setWallets(current => current.map(wallet => (wallet.account_id === id ? response : wallet)))
		}
		setLoading(false)
	}

	const getAll = async () => {
		setLoading(true)
		const response = await repository.getAll('/')
		if (response?.length) {
			setWallets(response)
		}
		setLoading(false)
	}

	const create = async (wallet: Wallet) => {
		setLoading(true)
		const response = await repository.post('/', wallet)
		if (response) {
			setWallets([...wallets, response])
		}
		setLoading(false)
	}

	const update = async (wallet: Wallet) => {
		setLoading(true)
		const response = await repository.put(`/${wallet.account_id}`, wallet)
		if (response) {
			setWallets(current => current.map(wallet => (wallet.account_id === response.account_id ? response : wallet)))
		}
		setLoading(false)
	}

	const deleteWallet = async (id: string) => {
		setLoading(true)
		await repository.delete(`/${id}`)
		setWallets(current => current.filter(wallet => wallet.account_id !== id))
		setLoading(false)
	}

	return (
		<WalletContext.Provider
			value={{
				wallets,
				loading,
				get,
				getAll,
				create,
				update,
				delete: deleteWallet
			}}
		>
			{props.children}
		</WalletContext.Provider>
	)
}
