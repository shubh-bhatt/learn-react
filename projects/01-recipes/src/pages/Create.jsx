import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { recipecontext } from "../context/Recipecontext";

const Create = () => {
  const { recipedata, setRecipedata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();

    // const copydata = [...data];
    // copydata.push(recipe);
    // setRecipedata(copydata);

    setRecipedata([...recipedata, recipe]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        className="block border-b outline-0 p-2"
        {...register("image")}
        placeholder="Enter image URL"
        type="url"
      />
      <small className="text-red-400 mb-5">This is the error</small>

      <input
        className="block border-b outline-0 p-2 mb-2"
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
      />

      <textarea
        className="block border-b outline-0 p-2 w-60 mb-2"
        placeholder="Write Recipe Details"
        {...register("description")}
      ></textarea>

      <textarea
        className="block border-b outline-0 p-2 w-60 mb-2"
        placeholder="Write Recipe Ingredients"
        {...register("ingredients")}
      ></textarea>

      <textarea
        className="block border-b outline-0 p-2 w-60 mb-2"
        placeholder="Recipe Instructions"
        {...register("instructions")}
      ></textarea>

      <select
        className="block border-b outline-0 p-2 w-60 mb-8 mt-5"
        {...register("category")}
      >
        <option className="text-black">Select Category</option>
        <option value="breakfast" className="text-black">
          Breakfast
        </option>
        <option value="lunch" className="text-black">
          Lunch
        </option>
        <option value="dinner" className="text-black">
          Dinner
        </option>
      </select>

      <button className="border-0 rounded bg-gray-700 px-5 py-2 cursor-pointer">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
