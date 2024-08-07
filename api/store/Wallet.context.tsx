import React, { useEffect } from 'react'

import { Wallet } from '../models/Wallet.model'
import WalletRepository from '../repositories/Wallet.repository'

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

// This hook can be used to access the current Wallet info.
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

	useEffect(() => {
		console.log('wallets', wallets)
	}, [wallets])

	const repository = new WalletRepository('/wallets')

	const get = async (id: string) => {
		setLoading(true)
		const response = await repository.get(`/${id}`)
		setWallets(current => current.map(wallet => (wallet.account_id === id ? response : wallet)))
		setLoading(false)
	}

	const getAll = async () => {
		setLoading(true)
		const response = await repository.getAll('/')
		console.log('response', response)
		setWallets(response)
		setLoading(false)
	}

	const create = async (wallet: Wallet) => {
		setLoading(true)
		const response = await repository.post('/', wallet)
		setWallets([...wallets, response])
		setLoading(false)
	}

	const update = async (wallet: Wallet) => {
		setLoading(true)
		const response = await repository.put(`/${wallet.account_id}`, wallet)
		setWallets(current => current.map(wallet => (wallet.account_id === response.account_id ? response : wallet)))
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
