import { Link } from "react-router-dom";
const RecipeCard = (props) => {
  const { id, image, title, description, ingredients } = props.recipe;
  return (
    <Link className="block w-[23vw] rounded overflow-hidden">
      <img className="object-cover w-full h-[20vh]" src={image} alt="" />
      <h1 className="mt-2 font-bold">{title}</h1>
      <p>{description}</p>
    </Link>
  );
};

export default RecipeCard;
