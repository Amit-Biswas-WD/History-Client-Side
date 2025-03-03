import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/all-artifacts", label: "All Artifacts" },
    { path: "/add-artifacts", label: "Add Artifacts" },
  ];

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            History
          </Link>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex items-center gap-8 text-lg">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 font-semibold"
                      : "hover:text-yellow-400 transition font-semibold"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Login Button (Desktop) */}
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              {user?.email ? (
                <img
                  src={user.photoUrl}
                  className="w-12 h-12 rounded-full border border-green-400"
                  alt="Profile image not found"
                />
              ) : (
                <img
                  src="https://i.ibb.co.com/FqCkhLFs/download.jpg"
                  className="w-12 h-12 rounded-full border border-red-400"
                  alt="Profile image not found"
                />
              )}
              {user?.email ? (
                <button
                  onClick={handleLogOut}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
                >
                  Log Out
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Push Content Down */}
      <div className="mt-16"></div>

      {/* Mobile Navbar (Fixed Overlay) */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-900 p-6 transition-transform duration-700 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <button
          className="text-white absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        <ul className="flex flex-col space-y-4 mt-10">
          {navItems.map((item, index) => (
            <li key={index} onClick={() => setIsOpen(false)}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "hover:text-yellow-400 transition font-semibold"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          {/* Login Button (Mobile) */}
          <li>
            <NavLink
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded block text-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
