import React from "react";
import UseAxiosSecure from "../../../Hooks/UseAxios/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Loading/Loading";
import { toast } from "react-toastify";

const AdminHome = () => {
  const axiosSecure = UseAxiosSecure();
  const { data, isLoading, error } = useQuery({
    queryKey: ["data", axiosSecure],
    queryFn: async () => {
      const res = await axiosSecure.get("/userData");
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    toast.error(error);
    return null;
  }
  console.log(data);
  // total_worker
  const totalWorker = data.filter((item) => item.role === "Worker");
  // console.log(totalWorker);
  // total_Buyer
  const total_buyer = data.filter((item) => item.role === "Buyer");
  // console.log(total_buyer);
  // total_available_coins
  const avalible_coins = data.reduce((total, item) => {
    return total + item.Coins;
  }, 0);
  // console.log(avalible_coins);
  return (
    <div className="bg-base-200">
      {/* Admin state section  */}
      <div className="flex justify-around  items-center">
        <div className="flex justify-center items-center">
          <h2 className="font-bold lg:text-2xl">
            Total Workers:
            <span className="ml-3 text-secondary">{totalWorker.length}</span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="font-bold lg:text-2xl">
            Total Buyer:
            <span className="ml-3 text-yellow-400">{total_buyer.length}</span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="font-bold lg:text-2xl">
            Total Available coins:
            <span className="ml-3 text-green-400">{avalible_coins} $</span>
          </h2>
        </div>
      </div>
      {/* withdrawals collection  */}
      <div>withdrawls collection</div>
    </div>
  );
};

export default AdminHome;
