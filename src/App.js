// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import RecipeSearch from './components/search/RecipeSearch';
import RecipeList from './components/search-result/RecipeList';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false); 

  
  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=0d31e6ca&app_key=6151758f5f94802e446265a9928123a7`
      );
      setRecipes(response.data.hits.map(hit => hit.recipe));
    } catch (error) {
      console.error('Error searching for recipes:', error);
    }
    setLoading(false);
    toggleVisibility();
  };

  const handleReset= async () => {
    setRecipes([]);
    toggleVisibility();
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle isVisible
  };

  return (
    <div className="App">
      <h1 className="app-title">Your Recipe Search</h1>
      <RecipeSearch onSearch={handleSearch} onReset={handleReset}/>
      {loading ? <p>Loading...</p> : <RecipeList recipes={recipes} isVisible={isVisible} />}
    </div>
  );
}

export default App;
