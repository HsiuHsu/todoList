import React, { useState } from 'react';

export const TodoAddGroup = ({onAddTodo})=>{
    const defaultTodo = { id:Math.random(), name:"", done:false };
    const [todo, setTodo] = useState(defaultTodo);

    const submitTodoAdd = ()=>{
        onAddTodo && onAddTodo(todo)
        setTodo(defaultTodo)
    };

    return(
        <div className="addTodoGroup">
            <input className="todotype" type="text" placeholder="新增待辦事項" value={todo.name} onChange={(e)=>setTodo({...todo, name:e.target.value})}/>
            <button className="todoAdd" onClick={()=>{submitTodoAdd()}}>+</button>
        </div>
    );
};