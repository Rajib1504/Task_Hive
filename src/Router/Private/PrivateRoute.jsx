import { Navigate } from "react-router-dom";
import UseAuth from "../../Hooks/useAuth/UseAuth";
import Loading from "../../Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  if (loading) {
    return <Loading size={60}></Loading>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
