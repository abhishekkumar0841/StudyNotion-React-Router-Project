import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="flex justify-between p-5 w-11/12 m-auto h-1/6">
      <Link>
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav className="text-white font-bold tracking-wider text-xl">
        <ul className="flex gap-8">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/"> About </Link>
          </li>
          <li>
            <Link to="/"> Contact </Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-3">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-yellow-50 pt-2 pb-2 pr-4 pl-4 rounded-md hover:bg-yellow-200 font-bold transition">Login</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-yellow-50 pt-2 pb-2 pr-4 pl-4 rounded-md hover:bg-yellow-200 font-bold transition">Sign up</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button className="bg-yellow-50 pt-2 pb-2 pr-4 pl-4 rounded-md hover:bg-yellow-200 font-bold transition"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-yellow-50 pt-2 pb-2 pr-4 pl-4 rounded-md hover:bg-yellow-200 font-bold transition">Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
