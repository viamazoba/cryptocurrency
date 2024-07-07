import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Cryptocurrency, CryptoPrice, Pair } from '../types'
import { getCryptos, fetchCurrentCryptoPride } from '../services/CryptoService'

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    result: CryptoPrice
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair)=> Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set)=>({
    cryptocurrencies: [],
    result: {} as CryptoPrice,
    fetchCryptos: async ()=>{
        const cryptocurrencies = await getCryptos()
        set(()=>({
            cryptocurrencies
        }))
    },
    fetchData: async (pair: Pair)=> {
        
        const result = await fetchCurrentCryptoPride(pair)

        set(() => ({
            result
        }))
    }
})))