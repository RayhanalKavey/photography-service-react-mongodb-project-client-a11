import React, { useContext } from "react";
import { Link } from "react-router-dom";
import photoBizzLogo from "../../../assets/images/Logo/logo.png";
import homeBg from "../../../assets/images/background-img/home-background.png";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import "./Header.css";
import toast from "react-hot-toast";

const Header = () => {
  const { user, setUser, logout } = useContext(AuthContext);

  /// Handle log out
  const handleSignOut = () => {
    logout()
      .then((result) => {
        toast.success("Logged out successfully!");
        // navigate(from, { replace: true });
        setUser({});
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const navItems = (
    <>
      <li className="font-semibold">
        <Link to={"/"}>Home</Link>
      </li>

      <li>
        <Link to={"/services"}>Services</Link>
      </li>
    </>
  );
  const loginRegisterBtn = (
    <>
      {user?.email ? (
        <>
          <Link onClick={handleSignOut}>
            <button className="btn btn-outline">Logout</button>
          </Link>

          {/* <li className="self-center">{user?.email}</li> */}
        </>
      ) : (
        <>
          <Link to={"/login"}>
            <button className="btn btn-outline">Login</button>
          </Link>

          <Link to={"/signup"}>
            <button className="btn btn-outline">Sign Up</button>
          </Link>
        </>
      )}
    </>
  );

  return (
    <div className="navbar  mb-12 pt-12">
      <h1>{user?.email}</h1>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            <img className="w-20" src={photoBizzLogo} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
      <div className="navbar-end">{loginRegisterBtn}</div>
    </div>
  );
};

export default Header;
