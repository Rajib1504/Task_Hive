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
        <a
          href="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Rajib1504"
          target="_blank"
        >
          Join As Developer
        </a>
      </li>
    </>
  );
  return (
    <div className="z-50 sticky top-0 ">
      <div className="navbar bg-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn  btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mb-2"
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
              className="menu menu-sm dropdown-content  rounded-box z-[100] mt-3 w-36 bg-primary p-2 shadow"
            >
              {link}
            </ul>
          </div>
          {user ? (
            <>
              <div className="flex  justify-center items-center">
                <Link
                  to={"/"}
                  className="btn btn-ghost text-2xl flex gap-2 items-center"
                >
                  <img
                    src="https://i.ibb.co/LkNYRKf/Black-and-White-Minimalist-Professional-Initial-Logo-removebg-preview.png"
                    className="h-18 w-16"
                    alt=""
                  />
                  <p className=" text-2xl font-bold "> Task Hive</p>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="flex  justify-center items-center">
                <img
                  src="https://i.ibb.co/LkNYRKf/Black-and-White-Minimalist-Professional-Initial-Logo-removebg-preview.png"
                  alt=""
                  className="h-16 w-16"
                />

                <a className=" text-2xl font-bold ">Task Hive</a>
              </div>
            </>
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
