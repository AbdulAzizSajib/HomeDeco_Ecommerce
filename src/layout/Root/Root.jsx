import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "./../../Shared/Footer/Footer";

const Root = () => {
  const location = useLocation();
  const noLayout =
    location.pathname.includes("login") ||
    location.pathname.includes("registration");

  return (
    <div>
      {noLayout || <Navbar></Navbar>}
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      {noLayout || <Footer></Footer>}
    </div>
  );
};

export default Root;
