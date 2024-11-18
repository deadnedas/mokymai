import "./CardOne.css";
import Logo from "./imgs/speed.svg";
export default function Card() {
  return (
    <div className="card-container">
      <h2 className="card-title">The fastest WordPress Theme</h2>
      <h3 className="card-date">September 8, 2018</h3>
      <img src={Logo} alt="" className="card-photo" />
      <p className="card-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa
        officia sapiente quas architecto vel rem, deserunt ea, facilis, quo
        cupiditate voluptatem. Quam eaque facere dolore mollitia porro, earum
        accusantium.
      </p>
      <button className="card-button">
        <a href="#">Read more</a>
      </button>
    </div>
  );
}
