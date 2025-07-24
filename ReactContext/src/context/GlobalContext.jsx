/** @format */

import { createContext, useEffect, useReducer } from "react";

const initialState = () => {
  try {
    const storedCard = localStorage.getItem("card");
    return {
      card: storedCard ? JSON.parse(storedCard) : [],
      totalAmount: 0,
      totalPrice: 0,
    };
  } catch (error) {
    return {
      card: [],
      totalAmount: 0,
      totalPrice: 0,
    };
  }
};

export const GlobalContext = createContext();
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, card: [...state.card, payload] };
    case "DELETE":
      return {
        ...state,
        card: state.card.filter((item) => item.id != payload),
      };
    case "INCREASE":
      return {
        ...state,
        card: state.card.map((item) => {
          if (item.id == payload) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        }),
      };
    case "DECREASE":
      return {
        ...state,
        card: state.card.map((item) => {
          if (item.id == payload) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        }),
      };
    case "CALCULATE_TOTAL":
      const { totalPrice, totalAmount } = state.card.reduce(
        (acc, curVal) => {
          const { amount, price } = curVal;
          const itemTotal = amount * price;

          acc.totalPrice += itemTotal;
          acc.totalAmount += amount;

          return acc;
        },
        {
          totalPrice: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalAmount, totalPrice };
    case "CLEAR":
      return {
        card: [],
        totalPrice: 0,
        totalAmount: 0,
      };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());
  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL" });
    localStorage.setItem("card", JSON.stringify(state.card));
  }, [state.card]);
  return (
    <GlobalContext.Provider
      value={{
        ...state,
        dispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
