import { useState } from "react";
import "./App.css";
import HomePage from "./HomePage";
import StartupShowcase from "./StartupShowcase";
import FindCoFounder from "./FindCoFounder";
import InvestorConnects from "./InvestorConnects";
import StartupServices from "./StartupServices";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>Startit</h1> */}
      <HomePage />
      <StartupShowcase />
      <FindCoFounder />
      <InvestorConnects />
      {/* <StartupServices /> */}
      <Footer />
    </>
  );
}

export default App;
