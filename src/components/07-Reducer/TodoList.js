import React from 'react';
import { TodoItem } from './TodoItem';


export const TodoList = ({ todos, handleDelete, handleToggle }) => {

    return (
        <ul className="list-todos container-list">
        {
            todos.map((todo, i) => (
                <TodoItem 
                key={todo.id}
                todo={todo} 
                index={i} 
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                />
            ))
        }
    </ul>
    )
}
