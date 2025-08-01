import { useContext } from "react";
import { recipecontext } from "../context/Recipecontext";

const Recipes = () => {
  const { recipedata } = useContext(recipecontext);

  const renderRecipes = recipedata.map((recipe) => (
    <div key={recipe.id}>
      <h1>{recipe.title}</h1>
    </div>
  ));

  return <div>{renderRecipes}</div>;
};

export default Recipes;
