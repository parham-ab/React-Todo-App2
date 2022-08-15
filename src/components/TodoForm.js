import React, { useEffect, useRef, useState } from "react";
// uuid
import { v4 as uuidv4 } from "uuid";
// icons
import { SiAddthis } from "react-icons/si";
import { MdCloudDone } from "react-icons/md";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef();
  // changeHandler
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  // submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: uuidv4(),
      text: input,
    });
    // clear input
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={!props.edit ? "fieldContainer" : "updateField"}>
        <input
          type="text"
          name="text"
          placeholder={!props.edit ? "Add Todo..." : "Update Todo..."}
          value={input}
          onChange={changeHandler}
          ref={inputRef}
        />
        <button className={!props.edit ? "addBtn" : "updateBtn"}>
          {!props.edit ? <SiAddthis /> : <MdCloudDone />}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
