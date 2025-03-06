import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/Nav";

const Main = () => {
  return (
    <div>
      <Navbar />
      {/* <NavBar/> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
