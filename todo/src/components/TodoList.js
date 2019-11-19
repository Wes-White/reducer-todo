import React from "react";

const ToDoList = props => {
  console.log(props.propsPassedToToDoList);
  return (
    <div>
      ToDoList
      {props.propsTodos.map(todos => (
        <div key={todos.id}>{todos.item}</div>
      ))}
    </div>
  );
};

export default ToDoList;
