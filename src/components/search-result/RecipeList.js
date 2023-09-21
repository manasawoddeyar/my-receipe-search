// RecipeList.js
import React from 'react';
import RecipeCard from './RecipeCard'; // Import the RecipeCard component
import './RecipeList.css'; // Create a CSS file for RecipeList styles

function RecipeList({ recipes,isVisible }) {
console.log("isVisible : ",isVisible);
  return (
    <div>
    {recipes.length > 0 &&  <h2 className="recipe-heading">Recipes for you</h2>}
    {recipes.length > 0 ? (
      <div className="RecipeCardList">
        {recipes.slice(0, 10).map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    ) : (
      isVisible && <p>No recipes found. Please try a different search.</p>
      )}
  </div>
  );
}

export default RecipeList;
