import React from "react";
import { ListGroup, Accordion } from "react-bootstrap";
import "./new.css";
import recipe from "./img/recipe.png";

function PreviewRecipe({ values }) {
  const { title, cookingTime, serving, cusineType } = values;

  console.log(values);

  return (
    <div className="outerbox">
      <div className="pic">
        <img src={recipe} className="recipeImg" alt="preview recipe" />
      </div>
      <div className="inner">
        <ListGroup
          style={{
            maxWidth: "700px",
            marginTop: "10px",
            padding: "10px",
            fontWeight: "800",
            letterSpacing: "normal",
          }}
        >
          <ListGroup.Item>Title : {title}</ListGroup.Item>
          <ListGroup.Item>Cooking Time : {cookingTime}</ListGroup.Item>
          <ListGroup.Item>Serving : {serving}</ListGroup.Item>
          <ListGroup.Item>Cusine Type : {cusineType}</ListGroup.Item>
          <ListGroup.Item>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Ingrediant</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ListGroup.Item>
          <ListGroup.Item>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Method</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}

export default PreviewRecipe;
