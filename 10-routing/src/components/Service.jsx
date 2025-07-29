import { Outlet, useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="font-thin text-5xl mb-3">Service</h1>
      <button
        onClick={() => navigate("/service/details")}
        className="bg-white text-black px-4 py-2 border rounded mb-5 mr-5"
      >
        See Details
      </button>

      <button
        onClick={() => navigate("/service/update")}
        className="bg-white text-black px-4 py-2 border rounded mb-5"
      >
        See Details
      </button>

      <hr className="my-2" />
      <Outlet />
    </div>
  );
};

export default Service;
