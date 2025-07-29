import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  

  return (
    <div>
      <h1 className="font-thin text-4xl mb-3">{params.name}</h1>
      <h2 className="font-thin text-2xl mb-5">Product Details</h2>
      <button
        // onClick={() => navigate("/product")}
        onClick={() => navigate(-1)} // -1 works same as going one route back
        className="bg-white text-black px-4 py-2 border rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductDetails;
