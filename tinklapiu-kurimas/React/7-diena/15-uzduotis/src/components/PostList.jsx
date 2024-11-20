import PostContent from "./PostContent";
import { v4 as uuidv4 } from "uuid";

export default function PostList() {
  const posts = [
    {
      title: "HTML",
      content: "Lorem ipsum HTML",
      img: "./htmlImg.jpg",
    },
    {
      title: "CSS",
      content: "Lorem ipsum CSS",
      img: "./cssImg.jpg",
    },
    {
      title: "JavaScript",
      content: "Lorem ipsum JavaScript",
      img: "./jsImg.jpg",
    },
  ];

  const list = posts.map((post) => {
    return (
      <PostContent
        key={uuidv4()}
        title={post.title}
        content={post.content}
        img={post.img}
      />
    );
  });
  return <div>{list}</div>;
}
