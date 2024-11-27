import "./App.css";
import React, { useState } from "react";
import Comments from "./components/Comments";
import Posts from "./components/Posts";

function App() {
  const [posts, setPost] = useState(false);
  const [comments, setComments] = useState(false);

  const postOn = () => {
    setPost(!posts);
    if (comments == true) {
      setComments(!comments);
    }
  };
  const commentOn = () => {
    setComments(!comments);
    if (posts == true) {
      setPost(!posts);
    }
  };

  return (
    <>
      <div>
        <h1>Resources</h1>
        <p>API comes with 2 Resources</p>
        <span>
          <button onClick={postOn}>/Posts</button> --- 100 posts
        </span>{" "}
        <br />
        <span>
          <button onClick={commentOn}>/Comments</button> --- 500 posts
        </span>
      </div>

      {posts ? <Posts /> : <span></span>}
      {comments ? <Comments /> : <span></span>}
    </>
  );
}

export default App;
