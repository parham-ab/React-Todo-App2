import React, { useState } from "react";
// components
import TodoForm from "./TodoForm";
// icons
import { MdModeEditOutline } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

const Todo = ({ todos, deleteHandler, id, updateTodo }) => {
  // edit todo
  const [edit, setEdit] = useState({ id: null, value: "" });
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className="todo" key={index}>
      <div className="todoText" key={todo.id}>
        <p>{todo.text}</p>
      </div>
      <div>
        <MdModeEditOutline
          className="editBtn"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
        <TiDelete
          className="deleteBtn"
          onClick={() => deleteHandler(todo.id)}
        />
      </div>
    </div>
  ));
};

export default Todo;
