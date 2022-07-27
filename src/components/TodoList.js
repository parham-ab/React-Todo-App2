import React, { useEffect, useState } from "react";
// components
import TodoForm from "./TodoForm";
import Todo from "./Todo";
// img
import Pic from "../assets/img/pic1.svg";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  // localStorage
  useEffect(() => {
    let parsedData = localStorage.getItem("react-todos-list");
    let savedData = JSON.parse(parsedData);
    if (savedData != null) setTodos(savedData);
  }, []);
  // Add new todo
  const addTodo = (todo) => {
    // Prevent to adding empty text
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodo = [...todos, todo];
    localStorage.setItem("react-todos-list", JSON.stringify(todos));
    setTodos(newTodo);
  };
  // Delete a todo from the list
  const deleteHandler = (id) => {
    const newValue = [...todos].filter((item) => item.id !== id);
    const filtered = newValue.filter((item) => item.id !== id);
    localStorage.setItem("react-todos-list", JSON.stringify(filtered));
    setTodos(newValue);
  };
  // Edit todo
  const updateTodo = (todoId, todoValue) => {
    //   Prevent to adding empty text while updating
    if (!todoValue.text || /^\s*$/.test(todoValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? todoValue : item))
    );
    localStorage.setItem("react-todos-list", JSON.stringify(todos));
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
            <img loading="lazy" src={Pic} alt="pic" />
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
