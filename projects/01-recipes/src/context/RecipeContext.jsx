import { createContext, useState } from "react";

export const recipecontext = createContext(null);

const Recipecontext = (props) => {
  const [recipedata, setRecipedata] = useState([]);
  console.log(recipedata);
  
  return (
    <recipecontext.Provider value={{ recipedata, setRecipedata }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default Recipecontext;
