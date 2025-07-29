import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  const NavigateHandler = (name) => {
    navigate(`/product/details/${name}`);
  };

  return (
    <div>
      <h1 className="font-thin text-6xl mb-10">Products</h1>

      <div className="mb-5">
        <h3 className="font-thin text-4xl mb-3">Product 1</h3>
        <button
          onClick={() => NavigateHandler("Product 1")}
          className="bg-white text-black px-4 py-2 border rounded"
        >
          See Details
        </button>
      </div>

      <div className="mb-5">
        <h3 className="font-thin text-4xl mb-3">Product 2</h3>
        <button
          onClick={() => NavigateHandler("Product 2")}
          className="bg-white text-black px-4 py-2 border rounded"
        >
          See Details
        </button>
      </div>

      <div className="mb-5">
        <h3 className="font-thin text-4xl mb-3">Product 3</h3>
        <button
          onClick={() => NavigateHandler("Product 3")}
          className="bg-white text-black px-4 py-2 border rounded"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default Product;
