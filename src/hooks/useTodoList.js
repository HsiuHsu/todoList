import { useState } from 'react';

const useTodoList = () =>{
    const [todos, setTodos] = useState([]);
    const [todoState, setTodoState] = useState('all');
  
    const handleAddTodo = (todo)=>{
      setTodos([todo, ...todos]);
    }
  
    const handleChangeTodoValue = (getClickId)=>{
      const onTodoIndex = todos.findIndex(
        (todo) => todo.id === Number(getClickId)
      );
      const newTodos = [...todos];
      newTodos[onTodoIndex] = { ...newTodos[onTodoIndex], done: !newTodos[onTodoIndex].done}; 
      setTodos(newTodos);
    }

    return {todos, setTodos, handleAddTodo, todoState, setTodoState, handleChangeTodoValue};

};

export default useTodoList;