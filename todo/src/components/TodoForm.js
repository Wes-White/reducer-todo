import React, { useState } from "react";

const TodoForm = ({ newTodo, clearCompleted }) => {
  const [todo, setToDo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    newTodo(todo);
    setToDo("");
  };

  const handleChange = e => {
    setToDo(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="todo"
        type="text"
        placeholder="To Do:"
        value={todo}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
