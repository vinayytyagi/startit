import { useState } from "react";
import "./App.css";
import HomePage from "./HomePage";
import StartupShowcase from "./StartupShowcase";
import FindCoFounder from "./FindCoFounder";
import InvestorConnects from "./InvestorConnects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>Startit</h1> */}
      <HomePage />
      <StartupShowcase />
      <FindCoFounder />
      <InvestorConnects />
    </>
  );
}

export default App;
