import { useMemo } from 'react'
import { useCryptoStore } from '../store'

export default function CryptoPriceDisplay() {

    const { result } = useCryptoStore()
    const hasResult = useMemo(()=> !Object.values(result).includes('') && result.PRICE, [result])

    return(
        <div>
            { hasResult &&
                <>    
                    <h2>Cotización</h2>
                    <div className='result'>
                        <div>
                            <p>El precio es de: <span>{result.PRICE}</span></p>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}