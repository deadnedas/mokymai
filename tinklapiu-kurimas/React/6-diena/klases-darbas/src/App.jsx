import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Greeting name="John" lastname="jonaitis" age="25"></Greeting>
      <Greeting name="Kys" lastname="Alex" age="42"></Greeting>

      <Counter></Counter>
    </>
  );
}

export default App;
