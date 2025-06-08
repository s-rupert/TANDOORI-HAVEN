import React, { useState } from 'react';

function App() {
  const [placeId, setPlaceId] = useState('ChIJRVzuGIY7K4gRMbwT_By9xDQ');
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReviews = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`http://localhost:5000/api/reviews/${placeId}`);
      if (!res.ok) {
        throw new Error('Failed to fetch reviews');
      }
      const data = await res.json();
      setReviews(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Google Place Reviews</h1>
      <input
        type="text"
        placeholder="Enter Place ID"
        value={placeId}
        onChange={(e) => setPlaceId(e.target.value)}
        style={{ width: '300px' }}
      />
      <button onClick={fetchReviews} disabled={!placeId}>
        Get Reviews
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {reviews.length > 0 && (
        <ul>
          {reviews.map((r, i) => (
            <li key={i}>
              <strong>{r.author_name}</strong> ({r.rating}⭐): {r.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
