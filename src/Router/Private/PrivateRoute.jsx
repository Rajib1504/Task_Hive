import { Navigate, replace, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/useAuth/UseAuth";
import Loading from "../../Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  if (loading) {
    return <Loading size={60}></Loading>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
