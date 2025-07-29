import { useNavigate } from "react-router-dom";

const ServiceUpdate = () => {
  const navigator = useNavigate();
  return (
    <div>
      <h1 className="text-4xl font-thin mb-3">Services Update</h1>
      <h3 className="text-2xl font-thin mb-3">Update service with us...</h3>
      <button
        onClick={() => navigator(-1)}
        className="bg-white text-black p-3 rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default ServiceUpdate;
