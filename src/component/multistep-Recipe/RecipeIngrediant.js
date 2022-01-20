import React, { useEffect, useRef } from "react";
import "./new.css";
import { Form, InputGroup, FormControl, Button, Card } from "react-bootstrap";
import Pepper from "./img/ResIng.jpg";
import { AiFillDelete } from "react-icons/ai";

function RecipeIngrediant({
  values,
  handleChange,
  handleSumbit,
  ingrediant,
  setIngrediant,
}) {
  const ref = useRef(null);
  console.log(values, ingrediant);
  useEffect(() => {
    ref.current.focus();
  }, []);

  const deleted = (e, id) => {
    e.preventDefault();
    setIngrediant(ingrediant.filter((get) => get.id !== id));
  };
  return (
    <div className="outerbox">
      <div className="pic">
        <img src={Pepper} alt="background" className="recipeImg" width="100%" />
      </div>
      <div className="inner">
        <form
          className="recipeForm"
          onSubmit={handleSumbit}
          style={{ marginTop: "20px" }}
        >
          <Form.Label>Ingrediants</Form.Label>
          <InputGroup className="mb-4">
            <FormControl
              placeholder="1 Sliced Onion"
              value={values.ingrediant}
              onChange={handleChange("ingrediant")}
              ref={ref}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              className="ml-5 addbtn"
            >
              Add
            </Button>
          </InputGroup>
        </form>
        {values !== [] ? (
          <ul className="cards">
            {ingrediant.map((get) => {
              return (
                <li key={get.id}>
                  {get.value}
                  <button className="del" onClick={(e) => deleted(e, get.id)}>
                    <AiFillDelete style={{ color: "red" }} />
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default RecipeIngrediant;
