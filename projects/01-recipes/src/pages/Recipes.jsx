import { useContext } from "react";
import { recipecontext } from "../context/Recipecontext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { recipedata } = useContext(recipecontext);

  const renderRecipes = recipedata.map((recipe) => (
    <RecipeCard key={recipe.key} recipe={recipe} />
  ));

  return <div>{renderRecipes}</div>;
};

export default Recipes;
