import React from "react";
import Todo from "./Todo";

function ToDoContainer({ todos, delTodo }) {
  return (
    <div className="container">
      {todos.map((todo, index) => {
        return <Todo todo={todo} index={index} delTodo={delTodo} />;
      })}
    </div>
  );
}

export default ToDoContainer;
