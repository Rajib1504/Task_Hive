import React from "react";
import DashbordNavbar from "../Dashbord/Dashbord_NavBar/DashbordNavbar";
import Footer from "../Home/Shared/Footer/Footer";

const Dashbord = () => {
  return (
    <div>
      {/* navbar  */}
      <DashbordNavbar></DashbordNavbar>
      {/* side navigation bar */}
      <div className="drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-primary text-base-content min-h-full lg:w-40 w-30 md:p-4 lg:p-4 p-2">
            {/* Sidebar content here */}
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Task List</a>
            </li>
            <li>
              <a> Submissions</a>
            </li>
            <li>
              <a>Withdrawals</a>
            </li>
            <li>
              <a>Add new Tasks</a>
            </li>
            <li>
              <a>My Task's</a>
            </li>
            <li>
              <a>Purchase Coin</a>
            </li>
            <li>
              <a>Mannage Users</a>
            </li>
            <li>
              <a>Mannage Task</a>
            </li>
          </ul>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
