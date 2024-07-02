import { ChangeEvent, FormEvent, useState } from 'react'
import { currencies } from '../data'
import { useCryptoStore } from '../store'
import { Pair } from '../types'
import ErrorMessage from './ErrorMessage'

export default function CryptoSearchForm() {

    const { cryptocurrencies, fetchData } = useCryptoStore()
    const [ pair , setPair ] = useState<Pair>({
        currency: '',
        cryptocurrency: ''
    })

    const [ error, setError ] = useState('')

    const handleChange = (e: ChangeEvent<HTMLSelectElement>)=> {
        setPair({
            ...pair,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault()

        if(Object.values(pair).includes('')) {
            setError('Todos los campo son obligatorios')
            return
        }

        setError('')
        fetchData(pair)
    }

    return (
        <form
            className="form"
            onSubmit={handleSubmit}
        >
            {
                error && <ErrorMessage children={error} />
            }
            <div className="field">
                <label htmlFor="currency" className="">Moneda:</label>
                <select 
                    name="currency" 
                    id="currency"
                    value={pair.currency}
                    onChange={handleChange}
                >
                    <option value="">-- Selecione ---</option>
                    {
                        currencies.map(currency => (
                            <option 
                                key={currency.code}
                                value={currency.code}
                            >
                                {currency.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <div className="field">
                <label htmlFor="cryptocurrency" className="">Cryptomoneda:</label>
                <select 
                    name="cryptocurrency" 
                    id="cryptocurrency"
                    value={pair.cryptocurrency}
                    onChange={handleChange}
                >
                    <option value="">-- Selecione ---</option>
                    {
                        cryptocurrencies.map(currency => (
                            <option 
                                key={currency.CoinInfo.Name}
                                value={currency.CoinInfo.Name}
                            >
                                {currency.CoinInfo.FullName}    
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="submit" value='Cotizar'/>
        </form>
    )
}