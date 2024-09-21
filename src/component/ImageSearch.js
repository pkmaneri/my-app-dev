// src/ImageSearch.js
import React, { useState } from 'react';
import axios from 'axios';

const ImageSearch = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const ACCESS_KEY = 'IrOyI2sc5L2UEmHhxhJi-8BkbaMCQeLsFJc5QVx7bGk';

  const getImage = async () => {
    if (!query) return; // Don't fetch if query is empty
    setLoading(true);

    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          client_id: ACCESS_KEY,
          query: query,
          page: 2,
          per_page: 10, // Number of images to fetch per request
        },
      });
      setImages(response.data.results); // Access the results array
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images"
      />
      <button onClick={getImage}>Add</button>
      {loading && <p>Loading...</p>}
      <div>
        {images.map((image) => (
          <img key={image.id} src={image.urls.small} alt={image.description} />
        ))}
      </div>
    </div>
  );
};

export default ImageSearch;
