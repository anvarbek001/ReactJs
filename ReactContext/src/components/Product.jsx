/** @format */

import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "../hooks/UseGlobalContext";

const Product = ({ product }) => {
  const { dispatch, card } = useGlobalContext();
  const itemInCart = card.find((item) => item.id === product.id);

  return (
    <div className="card">
      <div className="card__item">
        <img className="card__image" src={product.image} alt="" width={50} />
        <div className="card__infa">
          <h5 className="card__title">{product.title}</h5>
          <small className="card__price">Price: ${product.price}</small>
        </div>
      </div>
      {!itemInCart && (
        <button
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: { ...product, amount: 1 },
            })
          }
          className="btn card__btn">
          <FaShoppingCart /> Add
        </button>
      )}
      {itemInCart && (
        <div className="card-action-btns">
          <button
            onClick={() => {
              if (itemInCart.amount == 1) {
                dispatch({ type: "DELETE", payload: itemInCart.id });
              } else {
                dispatch({ type: "DECREASE", payload: itemInCart.id });
              }
            }}
            className="btn card__btn__amount">
            &#8722;
          </button>
          <span className="amount">{itemInCart.amount}</span>
          <button
            onClick={() => {
              dispatch({ type: "INCREASE", payload: itemInCart.id });
            }}
            className="btn card__btn__amount">
            &#43;
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
