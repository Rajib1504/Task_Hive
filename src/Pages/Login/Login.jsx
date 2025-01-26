import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/useAuth/UseAuth";
import { toast } from "react-toastify";
import { useState } from "react";

const Login = () => {
  const { user, setUser, login, googleSignin } = UseAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/dashbord";
  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    login(email, password)
      .then((res) => {
        const olduser = res.user;
        setUser(olduser);
        // console.log();
        toast.success(`Login Successfull ${olduser.email}`);
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        const errormessage = err.message;
        toast.error(`Opps ! ${errormessage}`);
        setLoading(false);
      });
  };
  const handelGoogle = () => {
    googleSignin(email, password)
      .then((res) => {
        const googleUser = res.user;
        setUser(googleUser);
        toast.success(`Login Successfull ${googleUser.email}`);
        setLoading(false);

        navigate("/");
      })
      .catch((err) => {
        const errorM = err.message;
        // console.log(errorM);
        toast.error(`Opps! ${errorM}`);
        setLoading(false);
      });
  };
  return (
    <>
      <div className="flex items-center min-h-screen justify-center pt-2 pb-4 sm:pt-4 bg-gradient-to-bl from-primary">
        <div className="w-full max-w-md p-6 bg-gradient-to-tl from-primary rounded-lg shadow-md">
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
              {loading ? (
                <span className="loading loading-spinner text-white"></span>
              ) : (
                <p>Loading</p>
              )}
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
