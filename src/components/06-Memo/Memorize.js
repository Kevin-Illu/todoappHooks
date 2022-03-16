import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import '../02-useEffect/style.css'


export const Memorize = () => {


    const {counter, increment} = useCounter(0)
    const [ show, setShow ] = useState(true)
    
    return (
        <div>
            <h1>Memo <Small value={counter} /></h1>
            <hr />
            

            <button
                className="btn btn-primary m-2"
                onClick={ increment }
            > +1 </button>

            <button 
                className="btn btn-outline-primary m-2" 
                onClick={ () => {
                    setShow(!show);
                }}
            >
                show / hiden {JSON.stringify(show)}
            </button>
        </div>
    )
}
