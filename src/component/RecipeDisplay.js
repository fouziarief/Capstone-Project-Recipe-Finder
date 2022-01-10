import React from "react";
import "./recipe.css";

function RecipeDisplay(props) {
  return (
    <div className="wrapper">
      <div className="wrap">
        <img src={props.recipe.image} className="display-img" />
        <div className="info">
          <label>CuisineType:</label>
          <p>{props.recipe.cuisineType}</p>
          <ul className="ingr">
            {props.recipe.ingredients.map((ingrediant) => (
              <li>{ingrediant.text}</li>
            ))}
          </ul>
          <button
            className="display-ingre"
            onClick={() => {
              window.open(props.recipe.url);
            }}
          >
            Complete Ingredient
          </button>
        </div>
        <h2 className="display-label">{props.recipe.label}</h2>
      </div>
    </div>
  );
}

export default RecipeDisplay;
