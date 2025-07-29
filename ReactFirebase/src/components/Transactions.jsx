/** @format */

import { useFirestore } from "../hooks/useFirestore";
import style from "./Transactions.module.css";
import { FaTrash } from "react-icons/fa";

const Transactions = ({ transactions }) => {
  const { deleteDocument } = useFirestore();
  const handleDelete = (id) => {
    deleteDocument(id);
  };
  return (
    <div>
      {transactions.map((transaction) => {
        const { id, title, price } = transaction;
        return (
          <div key={id} className={style.card}>
            <h4>{title}</h4>
            <p>{price}</p>
            <span className={style.trash} onClick={() => handleDelete(id)}>
              <FaTrash />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Transactions;
