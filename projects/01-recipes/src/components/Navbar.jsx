import { NavLink } from "react-router-dom";
import Home from "../pages/Home";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-x-10 text-sm">
      <NavLink
        className={(e) => e.isActive && "text-red-400"}
        to="/"
        element={<Home />}
      >
        Home
      </NavLink>

      <NavLink
        className={(e) => e.isActive && "text-red-400"}
        to="/recipes"
        element={<Home />}
      >
        Recipes
      </NavLink>

      <NavLink
        className={(e) => e.isActive && "text-red-400"}
        to="/about"
        element={<Home />}
      >
        About
      </NavLink>

      <NavLink
        className={(e) => e.isActive && "text-red-400"}
        to="/create-recipe"
        element={<Home />}
      >
        Create Recipe
      </NavLink>
    </div>
  );
};

export default Navbar;
