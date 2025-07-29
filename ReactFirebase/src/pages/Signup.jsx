/** @format */

import styles from "./Auth.module.css";

const Signup = () => {
  const loading = true;
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <h1 className={styles.signup}>Signup</h1>
        <label>
          <span>Display Name:</span>
          <input type="text" />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" />
        </label>

        {!loading && <button>signup</button>}
        {loading && (
          <button className={styles.disabeled} disabled>
            loading...
          </button>
        )}
      </form>
    </div>
  );
};

export default Signup;
