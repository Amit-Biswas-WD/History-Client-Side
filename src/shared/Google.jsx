// import { FcGoogle } from "react-icons/fc"

const Google = () => {
    const handleGoogle = () => {
        console.log("GoogleLogin");
    }
  return (
    <div>
      <button onClick={handleGoogle} className="flex gap-2 items-center btn">
        {/* <FcGoogle className="w-7 h-auto" /> */}
        Google
      </button>
    </div>
  )
}

export default Google