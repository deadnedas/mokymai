import Search from "./imgs/search.svg";
import Menu from "./imgs/menu.svg";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="navbar">
          <h1>Marketer</h1>

          <ul>
            <li>
              <a href="#">
                {" "}
                <img src={Search} alt="" />
              </a>
            </li>
            <li>
              <div className="menu">
                <img src={Menu} alt="" />
                <a href="#">Menu</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
