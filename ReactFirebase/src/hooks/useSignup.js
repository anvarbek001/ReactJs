/** @format */

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const useSignup = () => {
  const signup = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredently) => {
        const regUser = userCredently.user;
        console.log(regUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return { signup };
};
