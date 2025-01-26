import React from "react";
import UseRole from "../../Hooks/UseRole/UseRole";
import Loading from "../../Loading/Loading";
import { Navigate } from "react-router-dom";

const WorkerRoute = ({ children }) => {
  const [role, isLoading] = UseRole();
  // console.log(role);
  if (isLoading) return <Loading />;
  if (role === "Worker") return children;
  return <Navigate to="/dashbord" replace="true" />;
};

export default WorkerRoute;
