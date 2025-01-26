import React, { useState } from "react";
import useAxiosPublic from "../../Hooks/UseAxios/useAxiosPublic";
import UseAuth from "../../Hooks/useAuth/UseAuth";
import { NavLink } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaCoins } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useCoins from "../../Hooks/UseCoins/UseCoins";
import UseAxiosSecure from "../../Hooks/UseAxios/UseAxiosSecure";

const DashboardNavbar = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  const [notification, setNotification] = useState([]);
  const [coin] = useCoins();
  // console.log(coin);
  const {
    data: User = {},
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      try {
        if (user?.email) {
          const res = await axiosPublic.get(`/user/${user.email}`);
          // console.log(res.data);
          return res.data;
        }

        return {}; // Fallback for undefined email
      } catch (error) {
        toast.error("Failed to fetch user data!");
        throw error;
      }
    },
    enabled: Boolean(user?.email), // Only fetch if user email exists
    staleTime: 1000 * 60 * 5, // Cache the result for 5 minutes
  });

  if (isLoading) {
    return <p className="text-center">loading....</p>; // Add a proper loading state
  }

  if (isError) {
    toast.error("Something went wrong!");
    return null;
  }
  const handleNotification = async () => {
    const data = await axiosSecure(`/notification/${user?.email}`);
    setNotification(data.data);
    console.log(data.data);
  };
  return (
    <nav className="bg-gradient-to-t from-primary to-secondary shadow-md">
      <div className="flex justify-between items-center px-3 w-full">
        {/* Logo */}
        <NavLink to={"/"}>
          <img
            src="https://i.ibb.co/LkNYRKf/Black-and-White-Minimalist-Professional-Initial-Logo-removebg-preview.png"
            className="lg:h-16 lg:w-16 md:h-12 md:w-12 h-10 w-10"
            alt="TaskHive Logo"
          />
        </NavLink>

        {/* User Info Section */}
        <div className="flex items-center gap-10">
          {/* User Details */}
          <div className="flex items-center gap-2 lg:gap-4 md:gap-4 rounded-lg p-2 ">
            <img
              src={User?.photo}
              alt="User Avatar"
              className="h-8 w-8 md:h-12 md:w-12 lg:h-12 lg:w-12 rounded-full border-2 border-accent"
            />

            <p className="font-bold text-gray-800">{User?.name || "User"}</p>
            <p className="text-sm  text-gray-500">{User?.role || "Role"}</p>

            <div className="flex items-center text-yellow-500">
              <FaCoins className="mr-1" />
              <span className="font-bold text-gray-800">
                {/* {User?.Coins || 0} */}
                {coin}
              </span>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="relative" onClick={handleNotification}>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button">
                <IoNotificationsOutline className="lg:text-3xl mt-2 text-xl md:text-3xl cursor-pointer text-gray-700 hover:text-gray-900 transition duration-200" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                {notification.map((item, idx) => (
                  <li key={idx}>
                    <p>{item.message}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dropdown for Notifications */}
            {/* <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-10 group-hover:block">
              <ul></ul>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
