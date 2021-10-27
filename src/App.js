// import logo from './logo.svg';
import './public/css/todoPage.css';
import './public/css/main.css';
import React from 'react';
import { HeaderTitle } from "./components/HeaderTitle";
import { TodoListFilterGroup } from "./components/TodoListFilterGroup";
import { TodoAddGroup } from './components/TodoAddGroup';
import { TodoListItem } from './components/TodoListItem';
import useTodoList from "./hooks/useTodoList";

function App() {
  const {todos, setTodos, handleAddTodo, todoState, setTodoState, handleChangeTodoValue} = useTodoList();

  return (
    <div className="container">
      <div  className="header">
        <HeaderTitle />
        <TodoListFilterGroup setTodoState={setTodoState} todoState={todoState}/>
      </div>
      <div className="todoItemGroup">
        <TodoAddGroup onAddTodo={handleAddTodo} setTodoState={setTodoState}/>
        <div className="todoListItemGroup">
        { todos.length === 0 && (
          <div>
            <h3>無待辦事項</h3>
          </div>
          )}
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
      </div>
    </div>
  );
}

export default App;
