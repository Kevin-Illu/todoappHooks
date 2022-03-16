import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
    
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1){
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        handleAddTodo(newTodo);
        reset();
    }


    return (

    <form className="form-todos" onSubmit={handleSubmit}>
        <input 
        type="text"
        autoComplete="off"
        className="input-todo"
        placeholder="new todo ..."
        name="description"
        value={description}
        onChange={ handleInputChange }
        />
        <button
        type="submit"
        className="btn-todo"
        >
        Add+
    </button>
</form>
    )
}
