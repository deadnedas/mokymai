import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LessText from "./components/LessText";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LessText
        text="Focused, hard work is the real key
      to success. Keep your eyes on the goal,
and just keep taking the next step
towards completing it."
        defaultLength={5}
      ></LessText>
    </>
  );
}

export default App;
