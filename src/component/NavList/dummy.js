<div>
  <div>
    {/* <img src={pic} className="display-img" /> */}
    <div>
      <label>CuisineType:</label>
      <p>{cusineType}</p>
      <ul>
        {ingrediant.map((get) => {
          return <li key={get.id}>{get.value}</li>;
        })}
      </ul>
      <button>
        <Link to={"/PreviewRecipe"}>click</Link>
        Complete Ingredient
      </button>
    </div>
    <h2>{{ title }}</h2>
  </div>
</div>;
