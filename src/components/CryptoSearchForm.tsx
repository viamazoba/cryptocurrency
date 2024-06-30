import { currencies } from '../data'

export default function CryptoSearchForm() {
    return (
        <form
            className="form"
        >
            <div className="field">
                <label htmlFor="currency" className="">Moneda:</label>
                <select 
                    name="currency" 
                    id="currency"
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
                >
                    <option value="">-- Selecione ---</option>
                </select>
            </div>

            <input type="submit" value='Cotizar'/>
        </form>
    )
}