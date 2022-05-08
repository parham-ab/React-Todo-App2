import React, { useEffect, useRef, useState } from "react";
// uuid
import { v4 as uuidv4 } from "uuid";
// icons
import { SiAddthis } from "react-icons/si";
import { MdCloudDone } from "react-icons/md";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
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
      {!props.edit ? (
        <div>
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
        </div>
      ) : (
        <div>
          <input
            type="text"
            name="text"
            placeholder="Update Todo..."
            value={input}
            onChange={changeHandler}
            ref={inputRef}
          />
          <button>
            <MdCloudDone />
          </button>
        </div>
      )}
    </form>
  );
};

export default TodoForm;
