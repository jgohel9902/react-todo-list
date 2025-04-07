import React, { useState } from "react";
import TodoList from "./TodoList"; // ✅ no curly braces
import TodoInput from "./TodoInput";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    if (todoText.trim() !== "") {
      setTodos([...todos, todoText]);
    }
  };

  const deleteTodo = (indexToDelete) => {
    const newTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>React Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
