import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuth = () => {
  const auth = AuthContext(useContext);
  return auth;
};

export default useAuth;
