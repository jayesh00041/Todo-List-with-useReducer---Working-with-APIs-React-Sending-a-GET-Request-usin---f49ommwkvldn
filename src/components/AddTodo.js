import React, { useRef } from "react"
import { ACTION } from '../reducers/todo.js'

const AddTodo = ({ dispatch }) => {
    const input = useRef();
    return (
        <>
            <form id="todo-form" onSubmit={(e) => { 
                    e.preventDefault(); 
                    dispatch({ type: ACTION.ADD_TODO, payload: input.current.value })
                } }>
                <input id="todo-input" type="text" ref={input} />
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export { AddTodo }