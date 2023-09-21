// RecipeCard.js
import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from 'react-icons/fa'; // Import icons
import './RecipeCard.css'; // Create a CSS file for RecipeCard styles

function RecipeCard({ recipe }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  const [likedRecipes, setLikedRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  // Function to toggle liking a recipe
  const toggleLike = (recipe) => {
    if (likedRecipes.includes(recipe)) {
      setLikedRecipes(likedRecipes.filter((r) => r !== recipe));
    } else {
      setLikedRecipes([...likedRecipes, recipe]);
    }
  };

  // Function to toggle saving a recipe
  const toggleSave = (recipe) => {
    if (savedRecipes.includes(recipe)) {
      setSavedRecipes(savedRecipes.filter((r) => r !== recipe));
    } else {
      setSavedRecipes([...savedRecipes, recipe]);
    }
  };

  // Render like and save buttons with icons
  const likeIcon = likedRecipes.includes(recipe) ? <FaHeart color="red" /> : <FaRegHeart />;
  const saveIcon = savedRecipes.includes(recipe) ? <FaBookmark color="blue" /> : <FaRegBookmark />;

  const ingredients = recipe.ingredients.map((ingredient) => ingredient.food).join(' - ');

  // Create dot-separated strings for health labels and diet labels
  const healthLabelsString = recipe.healthLabels.join(' • ');
  const dietLabelsString = recipe.dietLabels.join(' • ');


  return (
    <div className={`RecipeCard ${isExpanded ? 'expanded' : ''}`} >
      <h3>{recipe.label}</h3>
      <img src={recipe.image} alt={recipe.label} />
      <p>This dish is a type of {recipe.dishType.join(', ')} and good to have during {recipe.mealType} </p>
      <p className='recipeLabels'>{healthLabelsString} • {dietLabelsString}</p>
      {!isExpanded && <p className="clickToExpand" onClick={toggleCard}>Click to expand</p>}
      {isExpanded && (
        <div>
          <h4>Ingredients:</h4>
          <p>{ingredients}</p>

          <h4>Instructions:</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}><img className='IngredientsImage' src={ingredient.image} alt="Ingredients" />Step {index + 1}: Add {ingredient.text}</li>
            ))}
          </ul>
          <p className="clickToExpand" onClick={toggleCard}>Click to collapse</p>
        </div>
      )
      }
      <div className="button-container">
        <button
          className={`like-button ${likedRecipes.includes(recipe) ? 'liked' : ''}`}
          onClick={() => toggleLike(recipe)}
        >
          {likeIcon} Like
        </button>
        <button
          className={`save-button ${savedRecipes.includes(recipe) ? 'saved' : ''}`}
          onClick={() => toggleSave(recipe)}
        >
          {saveIcon} Save
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;

