import React from "react";
import { ListGroup, Accordion } from "react-bootstrap";
import "./new.css";
import recipe from "./img/recipe.png";

function PreviewRecipe({ values, methodtype, ingrediant }) {
  const { title, cookingTime, serving, cusineType, image } = values;

  console.log(methodtype);

  return (
    <div className="outerbox">
      <div className="pic">
        <img
          src={recipe}
          className="recipeImg"
          alt="preview recipe"
          width="60%"
        />
        {/* <img src={image} className="recipeImg" alt="preview recipe" /> */}
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
          <ListGroup.Item>
            Title : <span className="preview">{title}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            Cooking Time :<span className="preview">{cookingTime}</span>{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            Serving :<span className="preview">{serving}</span>{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            Cusine Type :<span className="preview">{cusineType}</span>{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Ingrediant</Accordion.Header>
                <Accordion.Body>
                  <ul className="cards">
                    {ingrediant.map((get) => {
                      return <li key={get.id}>{get.value}</li>;
                    })}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ListGroup.Item>
          <ListGroup.Item>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Method</Accordion.Header>
                <Accordion.Body>
                  {
                    <ol className="cards">
                      {methodtype.map((getList) => {
                        return <li key={getList.id}>{getList.value}</li>;
                      })}
                    </ol>
                  }
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}

export default PreviewRecipe;
