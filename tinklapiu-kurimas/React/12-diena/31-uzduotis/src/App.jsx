import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, Link } from "react-router";

import NavBar from "./components/NavBar";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";
import Home from "./components/Home";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="addTask" element={<AddTask />} />
        <Route path="tasks" element={<TaskList />} />
        <Route path="tasks/:id" element={<EditTask />} />
        {/* <Route path="*" element={<NoSite />} /> */}

        {/* <Route path="/remove:id" element={<Remove />} /> */}
      </Routes>
    </>
  );
}

export default App;
