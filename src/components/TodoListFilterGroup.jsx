import React from 'react';

export const TodoListFilterGroup = ({setTodoState, todoState}) =>{
    const getBtnState = (e) =>{
        setTodoState && setTodoState(e.target.id);
    }
    
    return(
        <div className="filterBtnGroup">
            <button className={`${ todoState==='all'? "filterBtn defaultBtn":"filterBtn"}`} id='all' onClick={getBtnState}>全部</button>
            <button className={`${ todoState==='undo'? "filterBtn defaultBtn":"filterBtn"}`} id='undo' onClick={getBtnState}>未完成</button>
            <button className={`${ todoState==='done'? "filterBtn defaultBtn":"filterBtn"}`} id='done' onClick={getBtnState}>已完成</button>
        </div>
    );
};