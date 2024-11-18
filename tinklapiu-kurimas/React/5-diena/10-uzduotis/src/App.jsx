import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Box from "./components/Box";
import PostImage from "./components/PostImage";
import PostContent from "./components/PostContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header></Header>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <PostImage></PostImage>
          <PostContent></PostContent>
        </div>
        <div className="col-6">
          <PostImage></PostImage>
          <PostContent></PostContent>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <Box></Box>
        </div>
        <div className="col-3">
          <Box></Box>
        </div>
        <div className="col-3">
          <Box></Box>
        </div>
        <div className="col-3">
          <Box></Box>
        </div>
      </div>
    </div>
  );
}

export default App;
