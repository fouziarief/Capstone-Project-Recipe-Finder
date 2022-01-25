import React, { useRef, useEffect } from "react";
import "./new.css";
import { Form, InputGroup, Button } from "react-bootstrap";
import parcle from "./img/RecipeDetail.jpg";
import { AiFillDelete } from "react-icons/ai";

function RecipeMethod({
  values,
  handleChange,
  handleMsubmit,
  methodtype,
  setMethodList,
}) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);
  const deleted = (e, id) => {
    e.preventDefault();
    setMethodList(methodtype.filter((getList) => getList.id !== id));
  };
  const edit = (id) => {
    const newTask = methodtype.map((getList) =>
      getList.id === id ? { title, id } : id
    );
    setMethodList(newTask);
  };
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
              ref={ref}
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
              return (
                <li key={getList.id}>
                  {getList.value}
                  <button
                    className="del"
                    onClick={(e) => deleted(e, getList.id)}
                  >
                    <AiFillDelete style={{ color: "red" }} />
                  </button>
                </li>
              );
            })}
          </ol>
        ) : null}
      </div>
    </div>
  );
}

export default RecipeMethod;
