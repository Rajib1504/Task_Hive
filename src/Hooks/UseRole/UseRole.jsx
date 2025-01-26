import { useQuery } from "@tanstack/react-query";
import UseAuth from "../useAuth/UseAuth";
import UseAxiosSecure from "../UseAxios/UseAxiosSecure";

const UseRole = () => {
  const axiosSecure = UseAxiosSecure();
  const { user, loading } = UseAuth();
  // console.log(user);
  const { data: role = "", isLoading } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure(`/userRole/${user?.email}`);
      return res.data.role;
    },
  });
  return [role, isLoading];
};

export default UseRole;
