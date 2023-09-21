// src/components/RecipeSearch.js
import React, { useState } from 'react';
import './Search.css';

function RecipeSearch({ onSearch ,onReset}) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleReset = () => {
    setQuery('');
    onReset();
  };

  return (
    <div>
      <div className="search-section">
      <input
      className="search-input"
        type="text"
        placeholder="Enter ingredients..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button  className="search-button" onClick={handleSearch}>Search</button>
      <button className="reset-button" onClick={handleReset}>Reset</button>
    </div>
    </div>
  );
}

export default RecipeSearch;
