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
  // delete a todo from the list
  const deleteHandler = (id) => {
    const newValue = [...todos].filter((item) => item.id !== id);
    setTodos(newValue);
  };
  return (
    <div>
      <h1>React Todo App</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} deleteHandler={deleteHandler} />
    </div>
  );
};

export default TodoList;
