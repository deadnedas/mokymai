import "./Box.css";
export default function Box(props) {
  return (
    <div className="box-color" style={{ backgroundColor: props.color }}></div>
  );
}
