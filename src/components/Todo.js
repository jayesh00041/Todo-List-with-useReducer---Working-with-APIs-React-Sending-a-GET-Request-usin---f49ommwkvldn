import React from 'react';
import DisplayEach from './DisplayEach';
const Todo = (props) => {
    let i = 1;
    return (
        <div className="todo">
            {console.log(props.data)}
            {props.data.map((todo)=><DisplayEach key={i++} value={todo} handleBtn = {props.handleBtn} />)}
        </div>
    )
}


export { Todo }

