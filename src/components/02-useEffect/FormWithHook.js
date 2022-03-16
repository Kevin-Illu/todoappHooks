import React from "react";
import {useForm} from "../../hooks/useForm";
import './style.css'

export const FormWithHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const {name, email, password} = formValues;

    const handleSubmit  = ( e ) => {
        e.preventDefault();
        console.log(formValues)
    }


    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithHook</h1>
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
            <div className="form-group m-1">
                <input 
                    type="password" 
                    name="password"
                    className="form-control"                
                    placeholder="Password"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                 />           
            </div>

            <button className="btn btn-primary">Save</button>
        </form>
    )
}
