import React, { useRef } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import "./new.css";
import RecipePic from "./img/bread-RD.jpg";
import { useForm } from "react-hook-form";

function RecipeDetails({ values, handleChange, handleFileChange }) {
  const { register, errors } = useForm();
  console.log(errors);
  const fileInput = useRef();
  const openFilePicker = () => {
    fileInput.current.click();
  };
  return (
    <>
      <div className="outerbox">
        <div className="pic rPic">
          <img
            src={RecipePic}
            alt="background"
            className="recipeImg"
            width="90%"
          />
        </div>

        <div className="inner">
          <Form.Group className="mt-5  recipeForm rdetail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Recipe Name "
              onChange={handleChange("title")}
              defaultValue={values.title}
              required
            />
            {errors && errors.title && <p> {errors.title.message} </p>}

            <Container>
              <Row>
                <Col>
                  {/* <Form.Group className="mt-5"> */}
                  <Form.Label variant="secondary" className="mt-5">
                    Cooking Time
                  </Form.Label>
                  <Form.Control
                    type="text"
                    // placeholder="1hr 45mins"
                    onChange={handleChange("cookingTime")}
                    defaultValue={values.cookingTime}
                  />
                  {/* </Form.Group> */}
                </Col>
                <Col>
                  {/* <Form.Group className="mt-5"> */}
                  <Form.Label className="mt-5">No.of Serving </Form.Label>
                  <Form.Control
                    type="text"
                    // placeholder="4"
                    onChange={handleChange("serving")}
                    defaultValue={values.serving}
                  />
                  {/* </Form.Group> */}
                </Col>
              </Row>
            </Container>

            {/* <Form.Group className="mt-5"> */}
            <Form.Label className="mt-5">Type of Cuisines</Form.Label>
            <Form.Select
              onChange={handleChange("cusineType")}
              defaultValue={values.cusineType}
            >
              <option>American</option>
              <option>Italian</option>
              <option>Indian</option>
              <option>Chinese</option>
              <option>Mexican</option>
              <option>Britsh</option>
              <option>Mediterranean</option>
              <option>Japanese</option>
              <option>Greek</option>
              <option>French</option>
            </Form.Select>
            {/* </Form.Group> */}
            <Form.Group controlId="formFile" className="mt-5">
              <Form.Label className="mt-3">Image</Form.Label>
              <Form.Control
                ref={fileInput}
                type="file"
                onChange={handleFileChange("image")}
                defaultValue={values.image}
                onClick={openFilePicker}
              />
            </Form.Group>
          </Form.Group>
        </div>
      </div>
    </>
  );
}

export default RecipeDetails;
