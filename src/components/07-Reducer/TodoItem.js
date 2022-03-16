import React from  'react';


export const TodoItem = ({todo, index, handleToggle, handleDelete}) => {

    return (
        <li className="item-todo">
            <span className="id-todo">{ index + 1 }</span>
            <p 
                className={`desc-todo ${todo.done && 'complete'}`}
                onClick={() => handleToggle(todo.id)}
            >
                {todo.desc}
            </p>
            <button 
                className="btn-eliminar"
                onClick={ () => handleDelete(todo.id)}
            >Eliminar</button>
        </li>
    )
}
