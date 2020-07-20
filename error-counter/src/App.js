import React from "react";
import Counter from "./components/Counter";
import "./App.css";
import CounterErrorBoundaries from "./components/CounterErrorBoundaries";

function App() {
  return (
    <div className="App">
      <CounterErrorBoundaries>
        <Counter />
      </CounterErrorBoundaries>
      <CounterErrorBoundaries>
        <Counter />
      </CounterErrorBoundaries>
    </div>
  );
}

export default App;
