import React from "react";
import ClickButton from "./components/ClickButton";
import ClickCounter from "./components/ClickCounter";

const App = () => {
  return (
    <div className="app">
      <h1>CLICK COUNTER</h1>
      <ClickCounter />
      <ClickButton />
    </div>
  );
};

export default App;
