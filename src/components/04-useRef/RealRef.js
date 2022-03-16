import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import '../02-useEffect/style.css';


export const RealRef = () => {

    const [show, setShow] = useState(false)

    return(
        <div>
            <h1>Caso Real</h1>
            <hr />

        { show && <MultipleCustomHooks /> }

            <button
                className="btn btn-primary mt-4"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide
            </button>
        </div>
    )
}
