import React, {useState} from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        count1: 0,
        count2: 0,
    });

    const { count1, count2 } = state;

    return (
        <>
            <h2>Counter1 { count1 }</h2>
            <h2>Counter2 { count2 }</h2>

            <hr/>
            <button 
               className="btn btn-primary"
               onClick = { () => {
                   setState({
                       ...state,
                       count1: count1 + 1
                   });
                }}    
            >
                +1
            </button>
        </>
    )
}
