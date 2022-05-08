import React from "react";
// icons
import { MdModeEditOutline } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

const Todo = ({ todos, deleteHandler, id }) => {
  return todos.map((todo, index) => (
    <div key={index}>
      <div key={todo.id}>{todo.text}</div>
      <MdModeEditOutline />
      <TiDelete onClick={() => deleteHandler(todo.id)} />
    </div>
  ));
};

export default Todo;
