import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../store/actions/actions";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    const newTodo = {
      id: Math.random(),
      done: false,
      item: input,
    };

    dispatch(saveTodo(newTodo));

    setInput("");
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Enter to todo"
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <button onClick={addTodo}>Add!</button>
    </div>
  );
};

export default Input;
