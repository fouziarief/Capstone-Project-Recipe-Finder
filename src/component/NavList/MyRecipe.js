import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";

function MyRecipe({ values, ingrediant }) {
  // const { title, cookingTime, serving, cusineType } = values;
  // console.log(values);
  return (
    <div className=" rd-1">
      <div className="headerNav">
        <Button variant="outline-secondary">Add</Button>
        <Button variant="outline-secondary">Edit</Button>
        <Button variant="outline-secondary">Delete</Button>
      </div>
      {/* {values.map((getRecipe) => { */}
      {/* <div className="wrapper">
        <div className="wrap" style={{ height: "280px" }}>
          <div className="lable">
            <label>Cooking time:</label>
            <h6>{cookingTime}</h6>
            <label>Serving For:</label>
            <h6>{serving}</h6>
          </div>
          <div className="info">
            <label>CuisineType:</label>
            <h2>{cusineType}</h2>

            <ul className="ingr">
              {ingrediant.map((get) => {
                return <li key={get.id}>{get.value}</li>;
              })}
            </ul>
            <button className="display-ingre">Complete Recipe</button>
          </div>
          <div>
            <h2 className="display-label">title:{title}</h2>
          </div>
        </div>
      </div>{" "} */}
    </div>
  );
}

export default MyRecipe;
