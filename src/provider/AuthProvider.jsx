import { createContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const google = () => {
    return signInWithPopup()
  }

  const valueInfo = { user, loading };
  return (
    <AuthContext.Provider value={valueInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
