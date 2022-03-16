const initialState = [
    {
        id: 1,
        todo: 'hacer tareas',
        done: false
    }
]


const reducer = (state = initialState, action) => {
    
    if (action?.type === 'agregar'){
        return [...state, action.payload]
    }
    return state
}

let todos = reducer()


const newTodo = {
    id: 2, 
    todo: 'comprar pan',
    done: false
}


const action = {
    type: 'agregar',
    payload: newTodo
}


todos = reducer( todos, action )

console.log(todos)


