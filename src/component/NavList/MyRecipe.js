import React from "react";
import { Button } from "react-bootstrap";
import CreateRecipe from "../multistep-Recipe/CreateRecipe";

function MyRecipe() {
  const recipePage = (e) => {
    <CreateRecipe />;
    e.preventDefault();
  };

  return (
    <div className="outerbox">
      <Button
        className="addBtn"
        variant="secondary"
        size="lg "
        onClick={recipePage}
      >
        Add Recipe
      </Button>
    </div>
  );
}

export default MyRecipe;
