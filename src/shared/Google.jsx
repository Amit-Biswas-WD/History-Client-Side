import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const Google = () => {
  const { google } = useAuth();

  const handleGoogle = () => {
    google()
      .then((result) => {
        console.log(result.user);
        toast("Sign up with Google Successfully!");
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
