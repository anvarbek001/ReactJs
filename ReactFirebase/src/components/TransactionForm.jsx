/** @format */

import { useState } from "react";
import styles from "./TransactionForm.module.css";
import { toast } from "sonner";
import { useFirestore } from "../hooks/useFirestore";

const TransactionForm = () => {
  const { addDocument } = useFirestore();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !price.trim()) {
      toast.error("Bo'sh maydonlarni to'ldiring");
      return;
    }
    addDocument({
      title,
      price: Number(price),
    });
    setTitle("");
    setPrice("");
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Price:</span>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </label>
        <button>Add</button>
      </form>
    </div>
  );
};

export default TransactionForm;
