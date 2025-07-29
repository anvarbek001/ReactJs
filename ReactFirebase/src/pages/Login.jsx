/** @format */

import styles from "./Auth.module.css";

const Login = () => {
  const loading = true;
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <h1 className={styles.signup}>Signup</h1>
        <label>
          <span>Email:</span>
          <input type="email" />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" />
        </label>

        {!loading && <button>login</button>}
        {loading && (
          <button className={styles.disabeled} disabled>
            loading...
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
