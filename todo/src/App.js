import React, { useReducer } from "react";
import { intialState, reducer } from "./reducers/reducer";
import "./App.css";
import TodoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);

  const addTodo = todo => {
    dispatch({ type: "AddTodo", payload: todo });
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <ToDoList propsTodos={state.todos} />
      <TodoForm addNewTodo={addTodo} />
    </div>
  );
}

export default App;
