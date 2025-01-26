import React, { useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/useAuth/UseAuth";
import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/UseAxios/useAxiosPublic";
import useCoins from "../../Hooks/UseCoins/UseCoins";
import { imgUpload } from "../../Utils/Utils";

const Register = () => {
  const [, , refetch] = useCoins();
  const [loading, setLoading] = useState(false);
  const { setUser, register, updateUserProfile } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageUrl = form.image_url.files[0];
    const photoURL = await imgUpload(imageUrl);
    const role = form.role.value;
    const formdata = { name, email, password, photoURL, role };
    // console.log(formdata);
    const regx = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regx.test(password)) {
      toast.error("Password validation fail");
    } else if (!email) {
      toast.error("invalide email address");
    } else {
      // register
      register(email, password)
        .then((res) => {
          const newUser = res.user;
          // console.log(newUser);
          // updateUserProfile
          updateUserProfile(name, photoURL).then(() => {
            const userInfo = {
              name: newUser.displayName,
              email: newUser.email,
              photo: newUser.photoURL,
              role: formdata.role,
            };
            axiosPublic.post("/user", userInfo).then((res) => {
              if (res.data.insertedId) {
                // console.log("user created to the database");
                toast.success(`Registerd by ${newUser.email}`);
                setLoading(false);
                refetch();
                navigate("/");
              } else if (res.data.message === "user already exist") {
                toast.error("User already exists with this email.");
                setLoading(false);
              }
            });
          });
          setUser(newUser);
        })
        .catch((err) => {
          const error = err.message;
          toast.error(`oops! ${error}`);
          setLoading(false);
        });
    }
  };

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
                htmlFor="task_image mt-2 "
                className="block text-sm font-medium text-gray-600"
              >
                Profile_image
              </label>
              <input
                required
                name="image_url"
                type="file"
                accept="image/*"
                className="w-full px-4 text file-input py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
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
                <option value={"Worker"}>Worker</option>
                <option value={"Buyer"}>Buyer</option>
              </select>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 text-white bg-gradient-to-r from-buttonColor to-secondary rounded-lg hover:from-secondary hover:to-buttonColor transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg focus:outline-none"
            >
              {loading ? (
                <span className="loading loading-spinner text-white"></span>
              ) : (
                <p>Submit</p>
              )}
            </button>
          </form>

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
