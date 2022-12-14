import React, { useContext } from "react";
import { Link } from "react-router-dom";
import photoBizzLogo from "../../../assets/images/Logo/logo.png";
// import homeBg from "../../../assets/images/background-img/home-background.png";
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
        setUser({});
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      {user?.uid && (
        <>
          <li>
            <Link to={"/myreviews"}>My Reviews</Link>
          </li>
          <li>
            <Link to={"/addServices"}>Add Services</Link>
          </li>
        </>
      )}
      <li>
        <Link to={"/blog"}>Blog</Link>
      </li>
    </>
  );
  const loginRegisterBtn = (
    <>
      {user?.email ? (
        <>
          <li className="">
            <Link onClick={handleSignOut}>
              <button className="btn btn-outline btn-secondary">Logout</button>
            </Link>
          </li>
          {/* <div>{user?.email}</div> */}
          <li className="mx-5">
            <img
              className="w-12 rounded-full"
              src={user?.photoURL}
              alt=""
              title={user?.displayName}
            />
          </li>
          {/* <li className="self-center">{user?.email}</li> */}
        </>
      ) : (
        <>
          <li>
            <Link to={"/login"}>
              <button className="btn btn-outline">Login</button>
            </Link>
          </li>

          <li className="mx-5">
            <Link to={"/signup"}>
              <button className="btn btn-outline">Sign Up</button>
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-info shadow-lg  custom-nav">
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
            <img className="w-14" src={photoBizzLogo} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-semibold">{navItems}</ul>
      </div>
      <ul className="navbar-end">{loginRegisterBtn}</ul>
    </div>
  );
};

export default Header;
