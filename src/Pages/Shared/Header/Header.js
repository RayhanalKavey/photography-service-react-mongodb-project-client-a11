import React from "react";
import { Link } from "react-router-dom";
import photoBizzLogo from "../../../assets/images/Logo/logo.png";
import homeBg from "../../../assets/images/background-img/home-background.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar bg-base-100 mb-12 pt-12 bg-slate-800">
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
            {/* Menu Items starT */}
            <Link to={"/"}>home</Link>
            <Link to={"/services"}>Services</Link>
            {/* Menu Items enD */}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          <img src={photoBizzLogo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {/* Menu Items starT */}
          <Link to={"/"}>home</Link>
          <Link to={"/services"}>Services</Link>
          {/* Menu Items enD */}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline">Appointment</button>
      </div>
    </div>
  );
};

export default Header;
