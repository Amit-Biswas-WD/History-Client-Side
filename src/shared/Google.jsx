import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Google = () => {
  const { google } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogle = () => {
    google()
      .then((result) => {
        const user = { email: result.user.email };
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
              toast("Sign up with Google Successfully!");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button onClick={handleGoogle} className="flex gap-2 items-center btn">
      <FcGoogle className="w-7 h-auto" />
      Sign up with Google
    </button>
  );
};

export default Google;
