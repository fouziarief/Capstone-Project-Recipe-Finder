import React from "react";
import "./new.css";
import { Form, InputGroup, Button } from "react-bootstrap";
import parcle from "./img/RecipeDetail.jpg";

function RecipeMethod({ values, handleChange, handleMsubmit, methodtype }) {
  return (
    <div className="outerbox">
      <div className="pic">
        <img src={parcle} alt="background" className="recipeImg" width="100%" />
      </div>
      <div className="inner">
        <form
          className="recipeForm"
          onSubmit={handleMsubmit}
          style={{ marginTop: "20px" }}
        >
          <Form.Label>Step by Step Method</Form.Label>
          <InputGroup className="mb-4">
            <Form.Control
              placeholder="Method"
              type="text"
              value={values.method}
              onChange={handleChange("method")}
            />
            <Button
              id="button-addon2"
              className="ml-5"
              variant="outline-secondary"
            >
              Add
            </Button>
          </InputGroup>
        </form>

        {values !== [] ? (
          <ol className="cards">
            {methodtype.map((getList) => {
              return <li key={getList.id}>{getList.value}</li>;
            })}
          </ol>
        ) : null}
      </div>
    </div>
  );
}

export default RecipeMethod;
