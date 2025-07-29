import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  const navigator = useNavigate();
  return (
    <div>
      <h1 className="text-4xl font-thin mb-3">More Services</h1>
      <h3 className="text-2xl font-thin mb-3">Choose us...</h3>
      <button
        onClick={() => navigator(-1)}
        className="bg-white text-black p-3 rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default ServiceDetails;
