import React from 'react';
import {ACTION} from '../reducers/todo';


export default function DisplayEach({value, handleBtn}) {
  return (
    <div>
        <div className="todo-title" style={value.isDone?{color:'grey'}:{}}>{value.todo_name}</div>
        <button onClick = {()=>handleBtn({type: ACTION.DONE, payload: value.id})}>Completed</button>
        <button className='todo-delete' onClick = {()=>handleBtn({type: ACTION.DELETE, payload: value.id})}>Delete</button>
    </div>
  )
}
