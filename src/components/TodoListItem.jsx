import React from 'react';

export const TodoListItem = ({name, onDelete, ckeckState, getId, onChangeValue}) =>{
    
    return(
        <div>
            <input type="checkbox" checked={ckeckState} id={getId} onChange={(e)=>{onChangeValue && onChangeValue(e.target.id);}}/>
            <div>{name}</div>
            <button onClick={()=>{onDelete()}}>delete</button>
        </div>
    );
};
