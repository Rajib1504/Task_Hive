import React from "react";
import DashbordNavbar from "../Dashbord/Dashbord_NavBar/DashbordNavbar";
import Footer from "../Home/Shared/Footer/Footer";
import { NavLink, Outlet } from "react-router-dom";
import UseRole from "../Hooks/UseRole/UseRole";

const Dashbord = () => {
  const [role] = UseRole();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <DashbordNavbar />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="lg:w-64 bg-primary   flex-shrink-0">
          <ul className="menu p-4 space-y-2">
            {/* Worker Section */}
            {role === "worker" && (
              <div>
                {" "}
                <li className="bg-base-200">
                  <NavLink to={"/dashbord/workerHome"}>Worker Home</NavLink>
                </li>
                <li className="bg-base-200">
                  <NavLink to={"/dashbord/taskList"}>Task List</NavLink>
                </li>
                <li className="bg-base-200">
                  <NavLink to={"/dashbord/submission"}>Submissions</NavLink>
                </li>
                <li className="bg-base-200">
                  <NavLink to={"/dashbord/withdrawals"}>Withdrawals</NavLink>
                </li>
              </div>
            )}

            {role === "Buyer" && (
              <div>
                {/* Buyer Section */}
                <li className="bg-base-200">
                  <NavLink to={"/dashbord/buyerHome"}>Buyer Home</NavLink>
                </li>
                <li className="bg-base-200">
                  <NavLink to={"/dashbord/addNewTask"}>Add New Task</NavLink>
                </li>
                <li className="bg-base-200">
                  <NavLink to={"/dashbord/myTasks"}>My Tasks</NavLink>
                </li>
                <li className="bg-base-200">
                  <NavLink to={"/dashbord/purchaseCoins"}>
                    Purchase Coins
                  </NavLink>
                </li>
                <li className="bg-base-200">
                  <NavLink to={"/dashbord/paymentHistory"}>
                    Payment History
                  </NavLink>
                </li>
              </div>
            )}

            {role === "Admin" && (
              <div>
                {/* Admin Section */}

                <li className="bg-base-200">
                  <NavLink to={"/dashbord/adminHome"}>Admin Home</NavLink>
                </li>
                <li className="bg-base-200">
                  <NavLink to={"/dashbord/mannageRoutes"}>Manage Users</NavLink>
                </li>
                <li className="bg-base-200">
                  <NavLink to={"/dashbord/mannageTasks"}>Manage Tasks</NavLink>
                </li>
              </div>
            )}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto bg-gray-50 sm:p-6">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashbord;
