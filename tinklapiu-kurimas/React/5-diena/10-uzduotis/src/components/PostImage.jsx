import img from "./img/red-panda.jpg";
import "./PostImage.css";

export default function PostImage() {
  return <img src={img} alt="" className="postImage" />;
}
