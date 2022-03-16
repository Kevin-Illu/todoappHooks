import React, {useReducer, useEffect} from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './style.css';


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init)

    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action)
    }

    const handleToggle = ( todoId ) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = ( newTodo ) => {

         dispatch( {
            type: 'add',
            payload: newTodo,
        });       
    }

       return (
        <div className="container" >
            <div className="container-todos container">
                <h1 className="title">
                    Todo App 
                    <span className="todos-len">
                        {todos.length}
                    </span>
                </h1>

                
                <TodoAdd
                    handleAddTodo={handleAddTodo}
                />
            </div>

            <TodoList 
                todos={todos} 
                handleDelete={handleDelete} 
                handleToggle={handleToggle} 
            />
        </div>

    )
}
