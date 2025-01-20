import React from "react";
import useAxiosPublic from "../../Hooks/UseAxios/useAxiosPublic";
import UseAuth from "../../Hooks/useAuth/UseAuth";
import { NavLink } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaCoins } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading/Loading";
import { toast } from "react-toastify";

const DashboardNavbar = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: User = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosPublic.get(`/user/${user.email}`);
        return res.data;
      }
      return {}; // Fallback for undefined email
    },
    enabled: !!user?.email, // Only fetch if user email exists
    staleTime: 1000 * 60 * 5, // Cache the result for 5 minutes
  });

  if (isLoading) {
    return <Loading></Loading>; // Add a proper loading state
  }

  if (isError) {
    return toast.error("Something went wrong!");
  }

  return (
    <nav className="bg-gradient-to-r from-primary to-secondary shadow-md">
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
                {User?.Coins || 0}
              </span>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="relative">
            <IoNotificationsOutline className="lg:text-3xl text-xl md:text-3xl cursor-pointer text-gray-700 hover:text-gray-900 transition duration-200" />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3 {/* Example notification count */}
            </div>
            {/* Dropdown for Notifications */}
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border hidden group-hover:block">
              <ul>
                <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  New task assigned to you!
                </li>
                <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Payment request approved.
                </li>
                <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  5 new messages in chat.
                </li>
                <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center font-semibold">
                  View All Notifications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
