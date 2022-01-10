import React, { useState } from "react";
import Axios from "axios";
import RecipeDisplay from "./RecipeDisplay";
// import Header from "../image/headerBackground.jpg";

function Home() {
  const [search, setSearch] = useState(" ");
  const [recipes, setRecipes] = useState();
  const app_id = "b26df944";
  const app_key = "48b4a9f26d11585ffcf596f7ee5e58df";

  var url = `https://api.edamam.com/search?q=${search}&app_id=${app_id}&app_key=${app_key}&&health=alcohol-free`;

  const getRecipes = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const search_handler = (e) => {
    setSearch("");
    e.preventDefault();
    getRecipes();
  };

  return (
    <div>
      <div className="home-container">
        <h3 className="heading ">
          Real Food Doesn't Have Ingredients,<br></br> Real Food Is Ingredients
        </h3>
        <form className="d-flex" onSubmit={search_handler}>
          <input
            className=" me-2 text"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter Your Ingredients "
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="recipe-display">
        {recipes &&
          recipes.map((r) => (
            <h2>
              <RecipeDisplay className="display-outer" recipe={r.recipe} />
            </h2>
          ))}
      </div>
    </div>
  );
}

export default Home;
