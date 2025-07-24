/** @format */

import Product from "./Product";
import { useGlobalContext } from "../hooks/UseGlobalContext";

const ProductList = ({ products }) => {
  const { totalPrice, dispatch } = useGlobalContext();
  return (
    <div className="crad-container">
      <div className="card-container__header">
        <p className="card-container__title">Product List:</p>
        <div>
          <span className="card-container__price">
            Total Price: ${totalPrice}
          </span>
          <button
            onClick={() => {
              dispatch({ type: "CLEAR" });
            }}
            className="btn card-container__btn">
            Clear
          </button>
        </div>
      </div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
