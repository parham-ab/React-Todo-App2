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
    <div className="todoList">
      <div className="header">
        <h1>
          React Todo App{" "}
          <span style={{ fontSize: "1rem", color: "#959595" }}>
            <sub>version.2</sub>
          </span>
        </h1>
      </div>
      <div>
        <TodoForm onSubmit={addTodo} />
        {todos.length === 0 && (
          <div className="aboutMe">
            <h1>
              Made with <span style={{ color: "#d30000" }}>❤</span> by
              <a
                href="https://parham-ab.netlify.app/"
                target={"_blank"}
                rel="noreferrer"
                style={{ color: "#666" }}
              >
                {" "}
                Parham Abolghasemi
              </a>
            </h1>
          </div>
        )}
        <Todo
          todos={todos}
          deleteHandler={deleteHandler}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
};

export default TodoList;
