import React from "react";

const ToDoList = props => {
  console.log(props.propsPassedToToDoList);
  return (
    <>
      ToDoList
      {props.propsTodos.map(todos => (
        <div key={todos.id}>{todos.item}</div>
      ))}
    </>
  );
};

export default ToDoList;
