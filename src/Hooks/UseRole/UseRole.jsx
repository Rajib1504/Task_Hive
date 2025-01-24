import { useQuery } from "@tanstack/react-query";
import UseAuth from "../useAuth/UseAuth";
import UseAxiosSecure from "../UseAxios/UseAxiosSecure";

const UseRole = () => {
  const axiosSecure = UseAxiosSecure();
  const { user, loading } = UseAuth();
  const { data: role = "", isLoading } = useQuery({
    queryKey: ["userRole", user.email],
    queryFn: async () => {
      const res = await axiosSecure(`/userRole/${user.email}`);
      return res.data.role;
    },
  });
  return [role, isLoading];
};

export default UseRole;
