import React, { useReducer } from "react";
import { intialState, reducer } from "./reducers/reducer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  // console.log(state)
  // console.log(state.todoItems)

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
      <h1>To Do List:</h1>
      <TodoList todoListProps={state.todoItems} toggleToDo={toggleToDo} />
      <TodoForm newTodo={addToDo} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
