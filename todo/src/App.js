import React, { useReducer } from "react";
import { intialState, reducer } from "./reducers/reducer";
import "./App.css";
import TodoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <ToDoList propsTodos={state.todos} />
      <TodoForm />
    </div>
  );
}

export default App;
