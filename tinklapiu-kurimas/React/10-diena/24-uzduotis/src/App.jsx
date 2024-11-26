import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import NoPage from "./components/NoPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />

          <Route path="/about" element={<AboutUs></AboutUs>} />
          <Route path="*" element={<NoPage></NoPage>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
