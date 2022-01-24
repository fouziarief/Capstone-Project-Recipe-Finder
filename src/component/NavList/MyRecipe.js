import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CreateRecipe from "../multistep-Recipe/CreateRecipe";
import { Link } from "react-router-dom";

function MyRecipe({ values, preview, methodtype, ingrediant }) {
  console.log(values, preview);
  return (
    <div className=" rd-1">
      <div className="headerNav">
        <Button variant="outline-secondary">Add</Button>
        <Button variant="outline-secondary">Edit</Button>
        <Button variant="outline-secondary">Delete</Button>
      </div>
      {preview.map((getRecipe) => {
        <div className="wrapper">
          <div className="wrap" style={{ height: "280px" }}>
            <div className="lable">
              <label>Cooking time:</label>
              <h6>{getRecipe.values.cookingTime}</h6>

              <label>Serving For:</label>
            </div>
            <div className="info">
              <label>CuisineType:</label>
              <h2>{getRecipe.values.cusineType}</h2>

              <ul className="ingr">
                {getRecipe.values.ingrediant.map((get) => {
                  return <li key={get.id}>{get.value}</li>;
                })}
              </ul>
              <button className="display-ingre">Complete Recipe</button>
            </div>
            <div>
              <h2 className="display-label">title:{getRecipe.values.title}</h2>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
}

export default MyRecipe;
