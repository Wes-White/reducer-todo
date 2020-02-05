import React, { useReducer } from "react";
import { intialState, rootReducer } from "./reducers/rootReducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(rootReducer, intialState);

  const addToDo = todo => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const toggleToDo = id => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>To Do List:</h1>
        <TodoList todoListProps={state.todoItems} toggleToDo={toggleToDo} />
        <TodoForm newTodo={addToDo} clearCompleted={clearCompleted} />
      </div>
    </div>
  );
}

export default App;
