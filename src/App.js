// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { Header } from "./components/Header";
import { TodoAddGroup } from './components/TodoAddGroup';
import { TodoListItem } from './components/TodoListItem';
import { TodoListFilterGroup } from "./components/TodoListFilterGroup";
import useTodoList from "./hooks/useTodoList";

function App() {

  const {todos, setTodos, handleAddTodo, todoState, setTodoState, handleChangeTodoValue} = useTodoList();
  
  return (
    <div className="container">
      <Header />
      <TodoAddGroup onAddTodo={handleAddTodo} />
      <TodoListFilterGroup setTodoState={setTodoState}/>
      { todos.length === 0 && "未有待辦事項"}
      { todoState==='all' && todos.map((todo, index)=>(
      <TodoListItem
        key = {index} 
        name = {todo.name}
        getId = {todo.id}
        ckeckState = {todo.done}
        onChangeValue = {handleChangeTodoValue}
        onDelete = {()=>{setTodos([...todos.slice(0, index), ...todos.slice(index+1)])}}
      />
      ))}
      { todoState==='undo' && todos.map((todo, index)=>(
          todo.done===false && <TodoListItem
          key = {index} 
          name = {todo.name}
          getId = {todo.id}
          ckeckState = {todo.done}
          onChangeValue = {handleChangeTodoValue}
          onDelete = {()=>{setTodos([...todos.slice(0, index), ...todos.slice(index+1)])}}
        />
      ))}
      { todoState==='done' && todos.map((todo, index)=>(
        todo.done===true && <TodoListItem
          key = {index} 
          name = {todo.name}
          getId = {todo.id}
          ckeckState = {todo.done}
          onChangeValue = {handleChangeTodoValue}
          onDelete = {()=>{setTodos([...todos.slice(0, index), ...todos.slice(index+1)])}}
        />
      ))}
    </div>
  );
}

export default App;
