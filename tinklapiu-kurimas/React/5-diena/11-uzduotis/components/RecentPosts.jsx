import "./RecentPosts.css";
import RecentPostCard from "./RecentPostCard";
export default function RecentPosts() {
  return (
    <aside>
      <h2>Recent posts</h2>

      <RecentPostCard
        imgs="./components/imgs/speed.svg"
        title="The fastest WordPress Theme"
        bgColor="rgb(94, 163, 61)"
      ></RecentPostCard>

      <RecentPostCard
        imgs="./components/imgs/send.svg"
        title="Top 10 Contact Form Plugins"
        bgColor="rgb(106,65,190)"
      ></RecentPostCard>

      <RecentPostCard
        imgs="./components/imgs/verified_user.svg"
        title="3 Awsome security Plugins for WordPress"
        bgColor="rgb(79,152,237)"
      ></RecentPostCard>
    </aside>
  );
}
