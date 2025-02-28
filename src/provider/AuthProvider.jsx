import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "./../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const google = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const name = "Amit";
  const valueInfo = { name, user, loading, google, createUser };
  return (
    <AuthContext.Provider value={valueInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
