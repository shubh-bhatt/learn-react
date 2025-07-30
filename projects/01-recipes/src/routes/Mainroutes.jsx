import { Route, Routes } from "react-router-dom";
import About from "src/pages/About";
import Home from "src/pages/Home";
import Recipes from "src/pages/Recipes";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Mainroutes;
