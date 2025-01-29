import { useState } from "react";
import "./App.css";
import ThemeContext from "./ThemeContext";
import UserContext from "./UserContext";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState({ name: "Johndw", role: "user" });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={{ user, setUser }}>
        <div>
          <Login></Login>

          <Dashboard></Dashboard>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
