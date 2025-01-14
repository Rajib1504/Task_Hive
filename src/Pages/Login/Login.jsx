import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  const handelGoogle = () => {};
  return (
    <>
      <div className="flex items-center min-h-screen justify-center pt-2 sm:pt-4  bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Login
          </h2>
          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-borderColor"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-borderColor"
                placeholder="Enter your password"
                required
              />
            </div>
            {/* Forget Password */}
            <div className="text-right mb-4">
              <Link
                to="/forgot-password"
                className="text-sm text-secondary hover:underline"
              >
                Forget Password?
              </Link>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 text-white bg-gradient-to-r from-buttonColor to-secondary rounded-lg hover:from-secondary hover:to-buttonColor transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg focus:outline-none
      "
            >
              Login
            </button>
          </form>
          {/* Google Login Button */}
          <button
            onClick={handelGoogle}
            className="w-full px-4 py-2 mt-4 text-gray-700 border  bg-secondary hover:from-secondary hover:to-buttonColor transform hover:scale-105 transition duration-300 ease-in rounded-lg focus:outline-none"
          >
            <div className="flex items-center gap-2 justify-center">
              <img
                className="w-6"
                src="https://i.ibb.co/mSSztJP/google-logo-9808.png"
                alt=""
              />
              <p className="text-white">Google Login</p>
            </div>
          </button>
          {/* Link to Register Page */}
          <p className="mt-4 text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-secondary hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
