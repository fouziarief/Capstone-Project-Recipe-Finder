import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./new.css";
import RecipeDetails from "./RecipeDetails";
import RecipeIngrediant from "./RecipeIngrediant";
import RecipeMethod from "./RecipeMethod";
import PreviewRecipe from "./PreviewRecipe";
import RecipeList from "../NavList/MyRecipe";
import { Link } from "react-router-dom";

function CreateRecipe() {
  const [activeSteps, setActiveStep] = useState(0);

  const getSteps = () => {
    return ["RecipeDetails", "RecipeIngrediant", "RecipeMethod", "Preview"];
  };

  const steps = getSteps();

  const [recipeValues, setRecipeValues] = useState({
    title: "",
    cookingTime: "",
    serving: "",
    cusineType: "",
    image: "",
    ingrediant: "",
    method: "",
  });

  const [ingrediants, setIngrediants] = useState([]);
  const [methodList, setMethodList] = useState([]);
  const [preview, setPreview] = useState([]);

  const handleNext = () => {
    setActiveStep((nextStep) => nextStep + 1);
  };
  const handlePre = () => {
    setActiveStep((preStep) => preStep - 1);
  };
  const handleChange = (input) => (e) => {
    setRecipeValues({ ...recipeValues, [input]: e.target.value });
  };

  const handleFileChange = (file) => (e) => {
    setRecipeValues({ ...recipeValues, [file]: e.target.files[0] });
  };

  const handleSumbit = (e) => {
    if (ingrediants !== null) {
      const newIngrediant = {
        value: recipeValues.ingrediant,
        id: Math.floor(Math.random() * 1000),
      };
      setIngrediants([...ingrediants, newIngrediant]);

      setRecipeValues({ ...recipeValues, ingrediant: "" });
      console.log();
    }
    e.preventDefault();
  };
  const handleMsubmit = (e) => {
    if (methodList !== null) {
      const newMethodList = {
        value: recipeValues.method,
        id: Math.floor(Math.random() * 1000),
      };
      setMethodList([...methodList, newMethodList]);
    }
    setRecipeValues({ ...recipeValues, method: " " });
    e.preventDefault();
  };
  const handlePreview = (e) => {
    if (preview !== null) {
      setPreview([...recipeValues, preview]);
      console.log(recipeValues);
      console.log(preview);
    }

    e.preventDefault();
  };
  useEffect(() => {
    console.log("effeced");
  }, []);

  const renderButton = () => {
    if (activeSteps > 3) {
      return undefined;
    } else if (activeSteps === 2) {
      return (
        <Button
          className="ml-5"
          className="btn1"
          variant="outline-dark"
          // onClick={handleNext}
          onClick={handlePreview}
        >
          <Link to={"/RecipeList"} href="#">
            Add
          </Link>
        </Button>
      );
      // } else if (activeSteps === 2) {
      //   return (
      //     <Button
      //       className="ml-5"
      //       className="btn1"
      //       variant="outline-dark"
      //       onClick={
      //     >
      //       Add
      //     </Button>
      //   );
    } else {
      return (
        <Button
          className="ml-5"
          className="btn1"
          variant="outline-dark"
          onClick={handleNext}
          style={activeSteps === 3 ? { display: "none" } : {}}
        >
          Next
        </Button>
      );
    }
  };

  return (
    <div className="steps">
      {activeSteps === 0 && (
        <RecipeDetails
          values={recipeValues}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
        />
      )}
      {activeSteps === 1 && (
        <RecipeIngrediant
          values={recipeValues}
          ingrediant={ingrediants}
          handleChange={handleChange}
          handleSumbit={handleSumbit}
          setIngrediant={setIngrediants}
        />
      )}
      {activeSteps === 2 && (
        <RecipeMethod
          values={recipeValues}
          handleChange={handleChange}
          methodtype={methodList}
          handleMsubmit={handleMsubmit}
        />
      )}

      {activeSteps === 3 && (
        <RecipeList
          values={recipeValues}
          handleChange={handleChange}
          methodtype={methodList}
          ingrediant={ingrediants}
          preview={preview}
        />
      )}
      {/* {activeSteps === 3 && (
        <PreviewRecipe
          values={recipeValues}
          handleChange={handleChange}
          methodtype={methodList}
          ingrediant={ingrediants}
        />
      )} */}
      <div className="btn-grp">
        <Button
          className="btn1"
          className="ml-5"
          variant="outline-secondary"
          disabled={activeSteps === 0}
          onClick={handlePre}
          style={activeSteps === 3 ? { display: "none" } : {}}
        >
          back
        </Button>
        {renderButton()}
      </div>
    </div>
  );
}

// const ref = firebase.database().ref("recipes/");
// let recipes;
// ref.on(
//   "value",
//   (snapshot) => {
//     recipes = [];
//     for (var prop in snapshot.val()) {
//       if (snapshot.val().hasOwnProperty(prop)) {
//         snapshot.val().id = prop;
//         recipes.push(snapshot.val()[prop]);
//       }
//     }
//     console.log(recipes);
//   },
//   (errorObject) => {
//     console.log("The read failed: " + errorObject.name);
//   }
// );

export default CreateRecipe;
