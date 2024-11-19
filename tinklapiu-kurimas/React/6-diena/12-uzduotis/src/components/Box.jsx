import "./Box.css";
export default function Box(props) {
  return <div className={`box-color ${props.color}`}></div>;
}
