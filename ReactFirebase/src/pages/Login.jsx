/** @format */

import { Link } from "react-router-dom";
import styles from "./Auth.module.css";

const Login = () => {
  const loading = false;
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <h1 className={styles.signup}>Signin</h1>
        <label>
          <span>Email:</span>
          <input type="email" />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" />
        </label>
        <Link to={"/signup"}>
          <p>Register</p>
        </Link>
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
