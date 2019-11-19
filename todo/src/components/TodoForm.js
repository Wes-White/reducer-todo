import React, { useState } from "react";

const TodoForm = ({ addNewTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    addNewTodo(todo);
    setTodo("");
  };

  const handleChange = e => {
    e.preventDefault();
    setTodo(e.target.value);
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
      <button type="submit">Submit</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
