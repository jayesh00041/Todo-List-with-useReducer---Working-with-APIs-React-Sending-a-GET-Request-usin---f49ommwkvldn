import React, { useReducer } from 'react'
import { todoReducer, ACTION } from '../reducers/todo';
import '../styles/App.css';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';
const App = () => {
  const [state,dispatch] = useReducer(todoReducer,[])
  
 
  return (
    <div id="main">
      <AddTodo dispatch={dispatch}/>
      <Todo data={state} handleBtn={dispatch} />  
    </div>
  )
}


export default App;
