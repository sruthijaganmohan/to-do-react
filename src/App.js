import React from "react";
import { useEffect, useState } from "react";
import './App.css';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (todo !== "") {
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (deleted) => {
    const notDeletedList = todoList.filter((todo) => {
      return todo !== deleted;
    });
    setTodoList(notDeletedList)
  };

  return (
    <div className="App">
      <h1>React ToDo</h1>

      <div className="input">
        <input 
          type="text" 
          name="todo" 
          placeholder="Create a new todo"
          onChange={(e) => {
            setTodo(e.target.value);
          }}/>
        <button 
          className="add-button"
          onClick={addTodo}>Add</button>
      </div>

      {
        todoList?.length > 0 
        ? (
            <ul className="todo-list">
              {
                todoList.map((todo, index) => (
                  <div className="todo">
                    <li key={index}> {todo} </li>
                    <button 
                      className="delete-button"
                      onClick={() => {
                        deleteTodo(todo)
                      }}>Delete</button>
                  </div>
                ))
              }
            </ul>
        ) 
        : (
            <div className="empty">
              <p>No task found</p>
            </div>
        )
      }
    </div>
  );
};

export default App;
