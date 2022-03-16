import React from 'react';
import { useCounter } from '../../hooks/useCounter';


import './counter.css';

export const CounterWithCustomHook = () => {
    
    const {state, increment, decrement, restart} = useCounter();

    return (
        <>
            <h1>Counter With Hook: {state}</h1>
            <hr/>
            
            <button onClick={increment} className="btn btn-primary m-1"> + 1</button>
            <btn className="btn btn-primary m-1" onClick={restart}> Reset </btn>
            <button onClick={decrement} className="btn btn-primary m-1"> - 1</button>
        </>
    )
}
