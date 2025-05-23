import { CircleUserRound } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../../Hooks/useAuth/UseAuth";
import { toast } from "react-toastify";
import { HiCurrencyDollar } from "react-icons/hi";
import useAxiosPublic from "../../../Hooks/UseAxios/useAxiosPublic";
import Loading from "../../../Loading/Loading";
import useCoins from "../../../Hooks/UseCoins/UseCoins";
import UseRole from "../../../Hooks/UseRole/UseRole";
const Navbar = () => {
  // const [coin, setCoin] = useState(0);
  const [coin] = useCoins();
  const [role] = UseRole();
  // console.log(coin);
  const { user, loading } = UseAuth();
  const axiosPublic = useAxiosPublic();
  if (loading) {
    <Loading></Loading>;
  }
 
  const link = (
    <>
      {!user && (
        <>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>Blogs</NavLink>
          </li>
          <li>
            <NavLink to={"/career"}>Careers</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}> Register</NavLink>
          </li>
        </>
      )}

      {user && (
        <>
          {" "}
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink
              to={`${
                (role === "Worker" && "/dashbord/workerHome") ||
                (role === "Buyer" && "/dashbord/buyerHome") ||
                (role === "Admin" && "/dashbord/adminHome")
              }`}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>Blogs</NavLink>
          </li>
          <li>
            <NavLink to={"/career"}>Careers</NavLink>
          </li>
        </>
      )}

      <li>
        <a
          href="https://github.com/Rajib1504/Task_Hive"
          target="_blank"
        >
          Join As Developer
        </a>
      </li>
    </>
  );
  // useEffect(() => {
  //   axiosPublic(`/user/${user?.email}`).then((res) => {
  //     const coin = res.data.Coins;
  //     setCoin(coin);
  //   });
  // }, [user?.email]);

  return (
    <div className="z-50  bg-primary sticky top-0 ">
      <div className="navbar px-0 w-11/12 mx-auto justify-between">
        <div className="">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn  btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
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
                <NavLink to={"/"} className="flex justify-center items-center">
                  <img
                    src="https://i.ibb.co/LkNYRKf/Black-and-White-Minimalist-Professional-Initial-Logo-removebg-preview.png"
                    className="lg:h-16 lg:w-16 rounded-full  p-0 m-0 h-10 w-10"
                    alt=""
                  />
                  <p className=" hidden md:block  lg:block md:text-2xl lg:text-2xl font-bold ">
                    {" "}
                    Task Hive
                  </p>
                </NavLink>
              </div>
            </>
          ) : (
            <>
              <div className="flex  justify-center items-center">
                <img
                  src="https://i.ibb.co/LkNYRKf/Black-and-White-Minimalist-Professional-Initial-Logo-removebg-preview.png"
                  alt=""
                  className="lg:h-16 lg:w-16 h-10 w-10"
                />

                <a className=" hidden md:block lg:block lg:text-2xl md:text-2xl font-bold ">
                  Task Hive
                </a>
              </div>
            </>
          )}
        </div>
        {!user && 
          // <div className="navbar-center  hidden lg:flex">
          //   <ul className="menu menu-horizontal px-1">{link}</ul>
          // </div>
       (
          <div className="  hidden lg:flex">
            <ul className="menu menu-horizontal px-2">{link}</ul>
          </div>
        )}
        {user && (
          <div className=" flex gap-2 justify-between  ">
              <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>
            <button className="flex btn btn-xs lg:btn-sm md:btn-sm justify-center items-center">
              <HiCurrencyDollar className="text-yellow-400 text-2xl" />
              {coin}
            </button>
           
            <div
              className=" tooltip  tooltip-bottom mr-4"
              data-tip={user?.displayName}
            >
              {user ? (
                <img
                  src={user.photoURL}
                  alt="User Icon"
                  className="w-5 sm:w-10  rounded-full"
                />
              ) : (
                <CircleUserRound />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
