import React, { useEffect, useRef, useState } from "react";
// icons
import { SiAddthis } from "react-icons/si";
// import { MdCloudDone } from "react-icons/md";
// components
import TodoList from "./TodoList";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  // submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
    // clear input
    setInput("");
  };
  // changeHandler
  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="text"
          placeholder="Add Todo..."
          value={input}
          onChange={changeHandler}
          ref={inputRef}
        />
        <button>
          <SiAddthis />
        </button>
      </form>
      <TodoList />
    </div>
  );
};

export default TodoForm;
