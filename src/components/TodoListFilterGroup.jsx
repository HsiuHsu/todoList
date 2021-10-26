import React from 'react';

export const TodoListFilterGroup = ({setTodoState}) =>{
    const getBtnState = (e) =>{
        setTodoState && setTodoState(e.target.id);
    }
    
    return(
        <div>
            <button id='all' onClick={getBtnState}>All</button>
            <button id='undo' onClick={getBtnState}>未完成</button>
            <button id='done' onClick={getBtnState}>已完成</button>
        </div>
    );
};