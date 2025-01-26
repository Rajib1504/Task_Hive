import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../UseAxios/UseAxiosSecure";
import UseAuth from "../useAuth/UseAuth";

const useCoins = () => {
  const axiosSecure = UseAxiosSecure();
  const { user, loading } = UseAuth();
  // console.log(user);
  const {
    data: coin = 0,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user-coin", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/users/coin/${user?.email}`);
      return data.coin;
    },
  });
  return [coin, isLoading, refetch];
};

export default useCoins;
