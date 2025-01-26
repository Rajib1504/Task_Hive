import { Navigate } from "react-router-dom";

import Loading from "../../Loading/Loading";
import UseRole from "../../Hooks/UseRole/UseRole";

const Adminroute = ({ children }) => {
  const [role, isLoading] = UseRole();
  // console.log(role);
  if (isLoading) return <Loading />;
  if (role === "Admin") return children;
  return <Navigate to="/dashbord" replace="true" />;
};
export default Adminroute;
