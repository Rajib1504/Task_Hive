import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/useAuth/UseAuth";
import { toast } from "react-toastify";

const Register = () => {
  const { setUser, register } = UseAuth();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const role = form.role.value;
    const formdata = { name, email, password, photoURL, role };
    console.log(formdata);
    const regx = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regx.test(password)) {
      toast.error("Password validation fail");
    } else if (!email) {
      toast.error("invalide email address");
    } else {
      register(email, password).then((res) => {
        const newUser = res.user;
        setUser(newUser);
        console.log(newUser);
        toast.success(`Registration Successfull ${newUser.email}`);
      });
      navigate("/").catch((err) => {
        const error = err.message;
        toast.error(`oops! ${error}`);
      });
    }
  };
  const handelGoogle = () => {};
  return (
    <>
      <div className="flex items-center pb-4 justify-center pt-2 sm:pt-4 bg-gradient-to-bl from-primary">
        <div className="w-full  max-w-md p-6 bg-gradient-to-tl from-primary  rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center  text-gray-800 mb-4">
            Register
          </h2>
          <form onSubmit={handleRegister}>
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:"
                placeholder="Enter your name"
                required
              />
            </div>
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
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Photo URL */}
            <div className="mb-4">
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium text-gray-600"
              >
                Photo URL
              </label>
              <input
                type="text"
                id="photoURL"
                name="photoURL"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Enter photo URL"
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
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Enter your password"
                required
              />
            </div>
            {/* Input */}
            <div className="mb-4">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-600"
              >
                Choose your Role
              </label>
              <select
                name="role"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                id=""
                defaultValue={"Select Role"}
              >
                <option defaultValue={"Select Role"} disabled>
                  Select Role
                </option>
                <option value={"Worker"}>Worker</option>
                <option value={"Buyer"}>Buyer</option>
              </select>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 text-white bg-gradient-to-r from-buttonColor to-secondary rounded-lg hover:from-secondary hover:to-buttonColor transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg focus:outline-none"
            >
              Submit
            </button>
          </form>
          {/* Google Login Button */}
          <button className="w-full px-4 py-2 mt-4 text-gray-700  bg-secondary hover:from-secondary hover:to-buttonColor transform hover:scale-105 transition duration-300 ease-in border border-gray-300 rounded-lg focus:outline-none">
            <div
              onClick={handelGoogle}
              className="flex items-center gap-2 justify-center"
            >
              <img
                className="w-6"
                src="https://i.ibb.co/mSSztJP/google-logo-9808.png"
                alt=""
              />
              <p className="">Google Login</p>
            </div>
          </button>
          {/* Link to Login Page */}
          <p className="mt-4 text-sm text-center  text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-secondary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
