import React, { useState } from "react";
// components
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  // add new todo
  const addTodo = (todo) => {
    //   prevent from adding empty text
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodo = [...todos, todo];
    setTodos(newTodo);
  };

  return (
    <div>
      <h1>React Todo App</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo />
    </div>
  );
};

export default TodoList;
