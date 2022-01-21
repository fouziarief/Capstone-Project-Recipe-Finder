import React from "react";
import { Button } from "react-bootstrap";
import CreateRecipe from "../multistep-Recipe/CreateRecipe";
import { Link } from "react-router-dom";
// import { pic } from "..//multistep-Recipe/img/pepper.jpg";

function MyRecipe({ values, methodtype, ingrediant }) {
  const { title, cookingTime, serving, cusineType, image } = values;

  return (
    <div className="wrapper">
      <div className="wrap">
        {/* <img src={pic} className="display-img" /> */}
        <div className="info">
          <label>CuisineType:</label>
          <p>{cusineType}</p>
          <ul className="ingr">
            {ingrediant.map((get) => {
              return <li key={get.id}>{get.value}</li>;
            })}
          </ul>
          {/* <button className="display-ingre">
            <Link to={"/PreviewRecipe"} className="preview"></Link>
            Complete Ingredient
          </button> */}
        </div>
        <h2 className="display-label">{{ title }}</h2>
      </div>
    </div>
  );
}

export default MyRecipe;
