export default function RecentPosts({ imgs, title, bgColor }) {
  return (
    <div>
      <img src={imgs} alt="" style={{ backgroundColor: bgColor }} />
      <p>{title}</p>
    </div>
  );
}
