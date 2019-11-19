import React, { useReducer } from "react";
import { intialState, reducer } from "./reducer";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div className="App">
      <H1>TODOS</H1>
    </div>
  );
}

export default App;
