import React, { useEffect, useState } from "react";
import { Message } from "./Message";


import './style.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState;

    useEffect(() => {
    }, []);

    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }

    return (
        <>
            <h1>SimpleForm</h1>
            <hr />

            <div className="form-group m-1">
                <input 
                    type="text" 
                    name="name"
                    className="form-control"         
                    placeholder="Name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />           
            </div>
            <div className="form-group m-1">
                <input 
                    type="text" 
                    name="email"
                    className="form-control"                
                    placeholder="Email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />           
            </div>

            { (name == '123') && <Message /> }
        </>
    )
}
