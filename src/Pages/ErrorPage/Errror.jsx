import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Errror = () => {
  return (
    <div className="flex flex-col items-center h-[100vh] justify-center">
      <div className=" text-center w-fit mx-auto ">
        <h1 className="text-4xl font-extrabold text-secondary">404</h1>
        <h4 className="text-md text-2xl font-semibold mb-2">Page Not Found</h4>
        <Link to="/">
          <button className="btn bg-[#38afe2] rounded-xl px-4 text-white w-fit">
            <ArrowLeft></ArrowLeft> Go Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Errror;
