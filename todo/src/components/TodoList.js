import React from "react";

const ToDoList = ({ todoListProps, toggleToDo }) => {
  // console.log(todoListProps)
  // console.log(toggleToDo)

  return (
    <>
      {todoListProps.map(todoItem => (
        <div
          key={todoItem.id}
          onClick={() => toggleToDo(todoItem.id)}
          className={todoItem.completed ? "completed" : ""}
        >
          {todoItem.item}
        </div>
      ))}
    </>
  );
};

export default ToDoList;
