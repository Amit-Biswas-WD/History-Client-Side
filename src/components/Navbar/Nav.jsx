import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logOut } = useAuth();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/all-artifacts", label: "All Artifacts" },
    { path: "/add-artifacts", label: "Add Artifacts" },
  ];

  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
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

          {/* Profile Image with Dropdown */}
          <div className="hidden md:block relative">
            {user?.email ? (
              <div>
                {/* Image Button */}
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="focus:outline-none"
                >
                  <img
                    src={
                      user.photoUrl
                        ? user.photoUrl
                        : "https://i.ibb.co/FqCkhLFs/download.jpg"
                    }
                    className="w-12 h-12 rounded-full border border-green-400 cursor-pointer"
                    alt="Profile"
                  />
                  <button
                    onClick={handleLogOut}
                    className="block w-full px-4 py-2 text-left text-red-600 hover:bg-red-100 rounded-b-lg"
                  >
                    🚪 Log Out
                  </button>
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white text-black border rounded-lg shadow-lg">
                    {/* User Email */}
                    <div className="px-4 py-2 text-sm font-semibold bg-gray-100 rounded-t-lg">
                      ✉ {user.email}
                    </div>
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-200">
                      👍 Like
                    </button>
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-200">
                      📌 My Add
                    </button>
                    <button
                      onClick={handleLogOut}
                      className="block w-full px-4 py-2 text-left text-red-600 hover:bg-red-100 rounded-b-lg"
                    >
                      🚪 Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
              >
                Login
              </NavLink>
            )}
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

export default NavBar;
