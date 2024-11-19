import "./Card.css";
export default function Card({ title, text, img, date, bgColor }) {
  return (
    <div className="card-container">
      <h2 className="card-title">{title}</h2>
      <h3 className="card-date">{date}</h3>
      <img
        src={img}
        alt=""
        className="card-photo"
        style={{ backgroundColor: bgColor }}
      />
      <p className="card-content">{text}</p>
      <button className="card-button">
        <a href="#">Read more</a>
      </button>
    </div>
  );
}
