import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header";
import Card from "../components/Card";
import Info from "../components/Info";
import RecentPosts from "../components/RecentPosts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <div className="main-container">
        <Card
          title="The fastest WordPress Theme"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa
        officia sapiente quas architecto vel rem, deserunt ea, facilis, quo
        cupiditate voluptatem. Quam eaque facere dolore mollitia porro, earum
        accusantium."
          img="./components/imgs/speed.svg"
          bgColor="rgb(94, 163, 61)"
          date="September 8, 2018"
        ></Card>
        <Card
          title="Top 10 Contact Form Plugins"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa
        officia sapiente quas architecto vel rem, deserunt ea, facilis, quo
        cupiditate voluptatem. Quam eaque facere dolore mollitia porro, earum
        accusantium."
          img="./components/imgs/send.svg"
          bgColor="rgb(106,65,190)"
          date="September 8, 2018"
        ></Card>
        <Card
          title="3 Awsome security Plugins for WordPress"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa
        officia sapiente quas architecto vel rem, deserunt ea, facilis, quo
        cupiditate voluptatem. Quam eaque facere dolore mollitia porro, earum
        accusantium."
          img="./components/imgs/verified_user.svg"
          bgColor="rgb(79,152,237)"
          date="September 8, 2018"
        ></Card>
      </div>

      <Info></Info>
      <RecentPosts></RecentPosts>
    </>
  );
}

export default App;
