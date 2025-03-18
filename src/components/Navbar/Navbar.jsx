import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logOut } = useAuth();
  const dropdownRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/all-artifacts", label: "All Artifacts" },
    ...(user ? [{ path: "/add-artifacts", label: "Add Artifacts" }] : []),
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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <div className="flex items-center gap-4 relative" ref={dropdownRef}>
              {user?.email ? (
                <>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative focus:outline-none"
                  >
                    <img
                      src={
                        user?.photoURL
                          ? user.photoURL
                          : "https://i.ibb.co/FqCkhLFs/download.jpg"
                      }
                      className="w-12 h-12 rounded-full border border-green-400 cursor-pointer"
                      alt="Profile"
                    />
                    {isHovered && (
                      <span className="absolute right-10 w-14 h-auto p-4 transform -translate-x-1/2 bottom-0 bg-black text-white text-xs px-2 py-1 rounded">
                        Click
                      </span>
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute  right-0 mt-[190px] w-60 bg-white text-black border rounded-lg shadow-lg">
                      {/* User Email */}
                      <div className="px-4 py-2 text-sm font-semibold bg-gray-100 rounded-t-lg">
                        {user.email}
                      </div>
                      <Link to={`/like`}>
                        <button className="block w-full px-4 py-2 text-left hover:bg-gray-200">
                          Like
                        </button>
                      </Link>
                      <Link to={`/my-add`}>
                        <button className="block w-full px-4 py-2 text-left hover:bg-gray-200">
                          My Add
                        </button>
                      </Link>
                    </div>
                  )}

                  <button
                    onClick={handleLogOut}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
                  >
                    Log Out
                  </button>
                </>
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
