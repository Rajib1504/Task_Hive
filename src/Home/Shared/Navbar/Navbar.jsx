import { CircleUserRound } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [user] = useState(null);
  const link = (
    <>
      {!user && (
        <>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/register"}> Register</Link>
          </li>
        </>
      )}

      {user && (
        <>
          {" "}
          <li>
            <a>Available Coin </a>
          </li>
          <li>
            <a>Dashboard</a>
          </li>
        </>
      )}

      <li>
        <a>Join As Developer</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          {user ? (
            <>
              <Link to={"/"} className="btn btn-ghost text-xl">
                Task_Hive
              </Link>
            </>
          ) : (
            <a className=" text-2xl font-bold">daisyUI</a>
          )}
        </div>
        {user ? (
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>
        ) : (
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>
        )}
        {user && (
          <div className="navbar-end flex mr-10 gap-10 border-2 border-red-400">
            <a className="btn">log out</a>
            <div className=" tooltip  tooltip-bottom mr-4" data-tip="user">
              {/* {user ? (
              <img
                src='icon'
                alt="User Icon"
                className="w-5 sm:w-10 rounded-full"
              />
            ) : (
            )} */}
              <CircleUserRound />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
