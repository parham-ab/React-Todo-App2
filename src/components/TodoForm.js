import React, { useEffect, useRef, useState } from "react";
// uuid
import { v4 as uuidv4 } from "uuid";
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
    props.onSubmit({
      id: uuidv4(),
      text: input,
    });
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
