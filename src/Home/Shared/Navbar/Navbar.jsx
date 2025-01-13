import { CircleUserRound } from "lucide-react";
const Navbar = () => {
  const link = (
    <>
      <li>
        <a>Login</a>
      </li>
      <li>
        <a>Register</a>
      </li>
      <li>
        <a>Available Coin </a>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
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
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">log out</a>
          <div
            className=" tooltip  tooltip-bottom"
            data-tip='user'
          >
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
      </div>
    </div>
  );
};

export default Navbar;
