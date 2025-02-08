import { useState } from "react";
import "./App.css";
import HomePage from "./HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>Startit</h1> */}
      <HomePage />
    </>
  );
}

export default App;
