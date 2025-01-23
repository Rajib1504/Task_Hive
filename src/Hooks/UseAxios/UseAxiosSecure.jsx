import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UseAuth from "./../useAuth/UseAuth";
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const UseAxiosSecure = () => {
  const { logOut } = UseAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("access-token");
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
    axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        const status = error?.response?.status;
        if (status === 400 || status === 401 || status === 403) {
          logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut]);

  return axiosSecure;
};

export default UseAxiosSecure;
