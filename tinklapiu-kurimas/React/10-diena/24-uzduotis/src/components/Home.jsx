import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h1>Welcome to the home page</h1>
      <Link to="/about">AboutUs</Link>
    </>
  );
}
