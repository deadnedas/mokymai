import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LessText from "./components/LessText";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <LessText
          text="Focused, hard work is the real key
        to success. Keep your eyes on the goal,
        and just keep taking the next step
        towards completing it."
          defaultLength={5}
        ></LessText>

        <LessText
          text="loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          defaultLength={5}
        ></LessText>
      </div>
    </>
  );
}

export default App;
