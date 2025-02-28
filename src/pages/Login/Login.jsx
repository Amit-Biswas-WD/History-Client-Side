import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    const valueInfo = { email, password };
    console.log("User Logged:", valueInfo);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
        {/* Left Side - Image */}
        <div className="hidden md:flex md:w-1/2 bg-blue-500 items-center justify-center p-8">
          <img
            src="https://i.ibb.co.com/Zz6zW6Cq/login.jpg"
            alt="Registration"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Email */}
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-300"
            >
              Register
            </button>
          </form>

          {/* register Link */}
          <p className="text-center text-gray-600 mt-4">
            Create a new account{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
