import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../store/actions/actions";

const TodoItem = ({ done, item, id }) => {
  const dispatch = useDispatch();

  const handleCheck = id => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="todoItem">
      <div>
        <input
          type="checkbox"
          onChange={() => handleCheck(id)}
          checked={done}
        />
      </div>

      <p className={done ? "todoItem--done" : null}>{item}</p>

      <div>
        <button onClick={() => dispatch(removeTodo(id))}>x</button>
      </div>
    </div>
  );
};

export default TodoItem;
