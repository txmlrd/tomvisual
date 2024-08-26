// pages/Hai.tsx
import { useEffect, useState } from 'react';

export default function Hai() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('pages/api/getData');
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} - {item.year}
          </li>
        ))}
      </ul>
    </div>
  );
}
