import React, { useState } from "react";
// icons
import { MdModeEditOutline } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import TodoForm from "./TodoForm";

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
    <div key={index}>
      <div key={todo.id}>{todo.text}</div>
      <MdModeEditOutline
        onClick={() => setEdit({ id: todo.id, value: todo.text })}
      />
      <TiDelete onClick={() => deleteHandler(todo.id)} />
    </div>
  ));
};

export default Todo;
