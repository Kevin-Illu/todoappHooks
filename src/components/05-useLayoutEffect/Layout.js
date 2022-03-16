import React, { useRef, useLayoutEffect } from 'react';
import '../02-useEffect/style.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';


export const Layout = () => {

    const { counter, increment } = useCounter(1)
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const { quote } = !!data && data[0];

    const pTag = useRef

    useLayoutEffect(() => {

    }, [quote]);

    return (
        <div>
            <h1>useLayoutEffect</h1>
            <hr />

            <blockquote className="blockquote">
                <p
                    ref={pTag}
                > 
                    {quote} 
                </p>
            </blockquote>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                next Quote
            </button>
        </div>
    )
}
