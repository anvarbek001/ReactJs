/** @format */

import { useCollection } from "../hooks/useCollection";
import styles from "./Home.module.css";
import Transactions from "../components/Transactions";
import TransactionForm from "../components/TransactionForm";

const Home = () => {
  const { data: transactions } = useCollection("transactions");
  return (
    <div className={`${styles.home} container`}>
      {transactions && <Transactions transactions={transactions} />}
      <div>
        <h2>Add New Transaction:</h2>
        <TransactionForm />
      </div>
    </div>
  );
};

export default Home;
