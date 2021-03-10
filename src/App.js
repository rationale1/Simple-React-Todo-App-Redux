import React from "react";
import { useSelector } from "react-redux";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import "./Index.css";

const App = () => {
  const todoList = useSelector(state => state.todo.todoList);
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.length > 0 ? (
            todoList.map(item => <TodoItem key={item.id} {...item} />)
          ) : (
            <h3>Add Todos...</h3>
          )}
        </div>

        <Input />
      </div>
    </div>
  );
};

export default App;
