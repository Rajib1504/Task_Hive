import UseAuth from "../useAuth/UseAuth";
import UseAxiosSecure from "../UseAxios/UseAxiosSecure";

import { useQuery } from "@tanstack/react-query";

const useCoins = () => {
  const axiosSecure = UseAxiosSecure();
  const { user, loading } = UseAuth();
  const {
    data: coin = 0,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user-coin", user?.email],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const { data } = await axiosSecure(`/users/coin/${user?.email}`);
      return data.coin;
    },
  });
  return [coin, isLoading, refetch];
};

export default useCoins;
