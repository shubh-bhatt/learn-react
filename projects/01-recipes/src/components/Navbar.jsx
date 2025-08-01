import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-x-10 text-sm mb-10">
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-400" : "")}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-red-400" : "")}
        to="/recipes"
      >
        Recipes
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-red-400" : "")}
        to="/about"
      >
        About
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `px-3 py-2 bg-gray-700 rounded ${isActive ? "text-red-400" : ""}`
        }
        to="/create-recipe"
      >
        Create Recipe
      </NavLink>
    </div>
  );
};

export default Navbar;
