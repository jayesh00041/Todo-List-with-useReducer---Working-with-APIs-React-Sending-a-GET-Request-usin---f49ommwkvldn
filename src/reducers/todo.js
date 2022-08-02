const todoReducer = (state, action) => {
    switch (action.type) {
        case 'addTodo': {
            
            return [...state,{id: Date.now(), todo_name: action.payload, isDone: false}];
        }
        case 'done': {
            return state.map((todo)=>{
                if(todo.id===action.payload){
                    return {...todo , isDone : !todo.isDone}
                }else{
                    return {...todo}
                }
            })
        }
        case 'delete': {
            console.log(state);
            return state.filter((todo)=>todo.id != action.payload);
        }
    }
}
export const ACTION = {
    ADD_TODO : 'addTodo',
    DONE : 'done',
    DELETE : 'delete'
}
export { todoReducer }