import React from "react";
import UseAxiosSecure from "../../../Hooks/UseAxios/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Loading/Loading";
import { toast } from "react-toastify";
import { FaCoins, FaTrash } from "react-icons/fa";

const AdminHome = () => {
  const axiosSecure = UseAxiosSecure();
  const { data, isLoading, error } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await axiosSecure.get("/userData");
      return res.data;
    },
  });
  // withdraw collection
  const {
    data: withdraw = [],
    isLoading: withdrawLoaing,
    error: withdrawError,
  } = useQuery({
    queryKey: ["withdraw", axiosSecure],
    queryFn: async () => {
      const res = await axiosSecure("/withdrawal");
      return res.data;
    },
  });

  if (isLoading || withdrawLoaing) {
    return <Loading />;
  }
  if (error || withdrawError) {
    toast.error(error);
    return null;
  }
  console.log(data);
  console.log(withdraw);

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
      <div className="overflow-x-auto mt-2 sm:mt-4">
        <table className="table">
          <thead>
            <tr>
              <th>Worker_Name</th>
              {/* <th className=" text-left pl-6">Title</th> */}
              <th>Coins</th>
              <th>Account No</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {withdraw.length > 0 ? (
              withdraw.map((details) => (
                <tr key={details._id}>
                  <td>{details.worker_name}</td>
                  <td className="flex gap-2 items-center justify-center">
                    <FaCoins className="text-yellow-400" />
                    {details.withdrawalCoins}
                  </td>
                  <td>{details.accountNumber}</td>
                  <td className="text-center"> $ {details.withdrawAmount}</td>
                  <td onClick={() => handledelete(id)}>
                    <FaTrash className="text-red-500 text-xl" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No Pending Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHome;
