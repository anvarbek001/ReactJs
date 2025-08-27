/** @format */

import { useState } from "react";
import styles from "./Auth.module.css";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";

const Signup = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(displayName, email, password);

    setDisplayName("");
    setEmail("");
    setPassword("");
  };

  const loading = false;
  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.signup}>Signup</h1>
        <label>
          <span>Display Name:</span>
          <input
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <Link to={"/login"}>
          <p>Login</p>
        </Link>
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
