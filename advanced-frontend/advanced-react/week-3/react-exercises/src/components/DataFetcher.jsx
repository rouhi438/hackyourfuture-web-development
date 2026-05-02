import { useState, useEffect } from "react";

export function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.jason();
        setData(result.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <div>
        <h3>Data Fetcher</h3>
        <div className="spinner"> Loading...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h3>Data Fetcher</h3>
        <p style={{ color: "blue" }}>Error : {error}</p>
      </div>
    );
  }
  return (
    <div>
      <h3>Data Fetcher</h3>
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
