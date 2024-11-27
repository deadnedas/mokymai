import { useState, useEffect } from "react";

export default function Posts() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
      {data.map((item) => {
        return (
          <ul key={item.id}>
            <li>User id: {item.userId}</li>
            <li>Id: {item.id}</li>
            <li>Title: {item.title}</li>
            <li>Body: {item.body}</li>
          </ul>
        );
      })}
    </>
  );
}
