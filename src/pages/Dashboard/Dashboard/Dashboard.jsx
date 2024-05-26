import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FaHome } from "react-icons/fa";
import { BiCart, BiLogOut } from "react-icons/bi";

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="flex">
      <div>
        <div className="flex bg-[#274546] text-[#EFEEE5]  flex-col h-full min-h-screen p-8 w-60 dark:bg-gray-50 dark:text-gray-800">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2>Dashboard</h2>
            </div>

            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm">
                  <Link
                    to="/"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <FaHome className="text-xl"></FaHome>
                    <span>Home</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link
                    to="/dashboard/cart"
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <BiCart className="text-xl"></BiCart>
                    <span>Cart</span>
                  </Link>
                </li>

                <li className="rounded-sm">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <BiLogOut className="text-xl"></BiLogOut>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
            <img
              src={user?.photoURL}
              alt=""
              className="w-12 h-12 rounded-lg dark:bg-gray-500"
            />
            <div>
              <h2 className="text-lg font-semibold">{user?.displayName}</h2>
              <span className="flex items-center space-x-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  View profile
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
