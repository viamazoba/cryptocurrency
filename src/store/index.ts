import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Cryptocurrency, CryptoPrice, Pair } from '../types'
import { getCryptos, fetchCurrentCryptoPride } from '../services/CryptoService'

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    result: CryptoPrice
    loading: boolean
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair)=> Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set)=>({
    cryptocurrencies: [],
    result: {} as CryptoPrice,
    loading: false,
    fetchCryptos: async ()=>{
        const cryptocurrencies = await getCryptos()
        set(()=>({
            cryptocurrencies
        }))
    },
    fetchData: async (pair: Pair)=> {

        set(() => ({
            loading: true
        }))
        
        const result = await fetchCurrentCryptoPride(pair)

        set(() => ({
            result,
            loading: false
        }))
    }
})))