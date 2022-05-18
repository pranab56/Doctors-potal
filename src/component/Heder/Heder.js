import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "../../Page/CustomLink/CustomLink";
import Home from "../Home/Home";

const Heder = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-52"
          >
            <CustomLink to={"/home"}>Home</CustomLink>
            <CustomLink to={"/about"}>About</CustomLink>
            <CustomLink to={"/appointment"}>Appointment</CustomLink>
            <CustomLink to={"/review"}>Review</CustomLink>
            <CustomLink to={"/contact"}>Contact us</CustomLink>
            <CustomLink to={"/login"}>Login</CustomLink>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal mr-14 ">
          <CustomLink className="mr-5" to={"/home"}>
            Home
          </CustomLink>
          <CustomLink className="mr-5" to={"/about"}>
            About
          </CustomLink>
          <CustomLink className="mr-5" to={"/appointment"}>
            Appointment
          </CustomLink>
          <CustomLink className="mr-5" to={"/review"}>
            Review
          </CustomLink>
          <CustomLink className="mr-5" to={"/contact"}>
            Contact us
          </CustomLink>

          <CustomLink className="mr-5" to={"/login"}>
            Login
          </CustomLink>
        </ul>
      </div>
    </div>
  );
};

export default Heder;
