import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

export default function Card({}) {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    setColor(!color);
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {color ? "Task is  done!" : "Task is not done!"}
        </h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="btn" onClick={changeColor}>
          <a
            href="#"
            className={`btn ${color ? "bg-success" : "bg-danger"} text-light `}
          >
            Go somewhere
          </a>
        </button>
      </div>
    </div>
  );
}
