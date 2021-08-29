import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? 
        <>
          <input
            type="text"
            name="text"
            className="todo-input edit"
            ref={inputRef}
            value={input}
            onChange={handleChange}
          />
          <button className="todo-button edit">Update</button>
        </>
       : (
        <>
          <input
            type="text"
            name="text"
            className="todo-input"
            ref={inputRef}
            value={input}
            onChange={handleChange}
          />
          <button className="todo-button">Add Todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
