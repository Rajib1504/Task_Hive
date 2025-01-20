import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../UseAxios/UseAxiosSecure";

const UseTasks = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/mytasks");
      return res.data;
    },
  });
  return [tasks];
};

export default UseTasks;
