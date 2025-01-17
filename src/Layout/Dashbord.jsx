import React from "react";
import DashbordNavbar from "../Dashbord/Dashbord_NavBar/DashbordNavbar";

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
          <ul className="menu bg-primary text-base-content min-h-full w-40 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
