import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddNewItem from "./AddNewItem";

function App() {
  const [todos, setTodos] = useState([]);

  function addToArray(todo) {
    setTodos((prevValue) => {
      return [...prevValue, todo];
    });
  }

  function deleteTodo(id) {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div>
        <AddNewItem onClicked={addToArray} />
      </div>
      <div>
        <ul>
          {todos.map((items, index) => (
            <TodoItem
              key={index}
              id={index}
              text={items}
              onChecked={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
