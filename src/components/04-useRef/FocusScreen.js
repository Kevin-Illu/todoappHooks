import React, {useRef} from 'react';

import '../02-useEffect/style.css';


export const FocusScreen = () => {
    
    const inputRef = useRef(); 

    const handleSelect = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />
            
            <div className="mb-3">
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="name" 
                    ref={inputRef}      
                />
                <button 
                    className="btn btn-outline-primary mt-2"
                    onClick={ handleSelect }      
                 > Aceptar </button>
            </div>
        </div>
    )
}
