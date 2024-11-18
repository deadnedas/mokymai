import logo from "./img/1200px-Red_Panda_(24986761703).jpg";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <h1 className="header-title">Page title</h1>
      <img
        src={logo}
        alt="Describe"
        className="header-img w100 object-fit-cover"
      />
    </header>
  );
}
