import React, { useState } from "react";

const TodoForm = ({ newTodo, clearCompleted }) => {
  const [todo, setToDo] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    newTodo(todo);
    setToDo("");
  };

  const handleChange = event => {
    setToDo(event.target.value);
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
      <button onClick={clearCompleted}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
