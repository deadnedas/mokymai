import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import FetchData from "./components/FetchData";
import User from "./components/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FetchData />} />

          <Route path="user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
