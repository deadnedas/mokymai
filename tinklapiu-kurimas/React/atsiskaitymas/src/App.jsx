import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, Link } from "react-router";

import KnyguSarasas from "./components/KnyguSarasas";
import NavBar from "./components/NavBar";
import RegistruotiKnyga from "./components/RegistruotiKnyga";
import EditKnyga from "./components/EditKnyga";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<KnyguSarasas />} />
        <Route path="home" element={<KnyguSarasas />} />
        <Route path="register" element={<RegistruotiKnyga />} />
        <Route path="/knygos/:id" element={<EditKnyga />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
