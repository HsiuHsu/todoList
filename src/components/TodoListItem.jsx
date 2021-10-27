import React from 'react';
// import DeleteIcon  from '../public/css/deleteIcon.svg';

export const TodoListItem = ({name, onDelete, ckeckState, getId, onChangeValue}) =>{
    
    return(
        <div className="todoListItem">
            <div className="itemValue">
                <input type="checkbox" checked={ckeckState} id={getId} onChange={(e)=>{onChangeValue && onChangeValue(e.target.id);}}/>
                <p>{name}</p>
            </div>
            <button className="deleteItemBtn" onClick={()=>{onDelete()}}>X</button>
        </div>
    );
};
