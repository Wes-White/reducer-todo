import React from "react";

const ToDoList = ({ todoListProps, toggleToDo }) => {
  return (
    <div className="todo-text">
      {todoListProps.map(todoItem => (
        <div
          key={todoItem.id}
          onClick={() => toggleToDo(todoItem.id)}
          className={todoItem.completed ? "completed" : ""}
        >
          {todoItem.item}
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
