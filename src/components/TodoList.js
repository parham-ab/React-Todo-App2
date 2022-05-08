import React, { useState } from "react";
// components
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  // Add new todo
  const addTodo = (todo) => {
    //   Prevent from adding empty text
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodo = [...todos, todo];
    setTodos(newTodo);
  };
  // Delete a todo from the list
  const deleteHandler = (id) => {
    const newValue = [...todos].filter((item) => item.id !== id);
    setTodos(newValue);
  };
  // Edit todo
  const updateTodo = (todoId, todoValue) => {
    //   Prevent from adding empty text
    if (!todoValue.text || /^\s*$/.test(todoValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? todoValue : item))
    );
  };

  return (
    <div>
      <h1>React Todo App</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        deleteHandler={deleteHandler}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
