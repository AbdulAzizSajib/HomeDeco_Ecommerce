import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

import { CiLogout, CiSearch, CiStar, CiUser } from "react-icons/ci";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import { BiCart } from "react-icons/bi";

const Navbar = () => {
  const [cart] = useCart();
  const { user, logoutUser } = useAuth();

  const handleLogOut = () => {
    logoutUser();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/collection">Collection</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/other-page">Other Page</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="fixed z-50 xl:pr-10 xl:pl-10 navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="font-bold xl:text-xl">Home Deco</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{navLinks}</ul>
        </div>
        {/* navbar end side */}
        <div className="flex items-center navbar-end">
          <button className="hidden text-xl btn btn-ghost btn-circle lg:flex">
            <CiSearch />
          </button>
          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="hidden text-xl btn btn-ghost btn-circle lg:flex"
              >
                <CiLogout />
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="hidden text-xl btn btn-ghost btn-circle lg:flex">
                  <CiUser />
                </button>
              </Link>
            </>
          )}
          <button className="hidden text-xl btn btn-ghost btn-circle lg:flex">
            <CiStar />
          </button>
          <Link to="/dashboard/cart">
            <button className="relative text-2xl btn btn-ghost btn-circle">
              <span className=" absolute bg-[#0A5D5D] text-sm bottom-4 left-7 text-white mask mask-circle p-2 ">
                {cart.length}
              </span>
              <BiCart></BiCart>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
