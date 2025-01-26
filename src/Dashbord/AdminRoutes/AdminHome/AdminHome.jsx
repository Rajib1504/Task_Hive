import UseAxiosSecure from "../../../Hooks/UseAxios/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Loading/Loading";
import { toast } from "react-toastify";
import { FaCoins, FaTrash } from "react-icons/fa";
import DashbordTitle from "../../../Home/Shared/SectionTitle/DashbordTitle";
import { Coins } from "lucide-react";
import useCoins from "../../../Hooks/UseCoins/UseCoins";
import UseAuth from "../../../Hooks/useAuth/UseAuth";

const AdminHome = () => {
  const axiosSecure = UseAxiosSecure();
  const { user, loading } = UseAuth();
  // state
  const { data: admin_State = {} } = useQuery({
    queryKey: ["adminStates"],
    enabled: !!localStorage.getItem("access-token"),

    queryFn: async () => {
      const res = await axiosSecure(`/admin-stats`);
      return res.data;
    },
  });
  // console.log(admin_State);

  const [, , refetch] = useCoins();
  const { data, isLoading, error } = useQuery({
    queryKey: ["data"],
    enabled: !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get("/userData");
      return res.data;
    },
  });
  // withdraw collection
  const {
    data: withdraw = [],
    refetch: fetchme,
    isLoading: withdrawLoaing,
    error: withdrawError,
  } = useQuery({
    queryKey: ["withdraw", axiosSecure],
    enabled: !!localStorage.getItem("access-token"),
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
  // console.log(data);
  // console.log(withdraw);
  const handleApprove = async (details) => {
    const amount = parseInt(details.withdrawAmount);
    const worker_email = details.worker_email;
    const coins = parseInt(details.withdrawalCoins);
    const worker_details = { amount, worker_email, coins };
    // console.log(worker_details);
    const res = await axiosSecure.patch(
      `/witdrawal/${details._id}`,
      worker_details
    );

    // console.log(res.data);
    if (res.data.modifiedCount) {
      const workerEmail = details.worker_email;
      const notificationData = {
        message: `withdrawal request has been Approve `,
        ToEmail: workerEmail,
        actionRoute: "/dashbord/worker-home",
        Time: new Date(),
      };

      const { data } = await axiosSecure.post(
        "/notification",
        notificationData
      );
      toast.success("withdrawal process successfully");
      refetch();
      fetchme();
    }
  };

  return (
    <div>
      <DashbordTitle heading={"Admin Home"}></DashbordTitle>
      {/* Admin state section  */}
      <div className="flex justify-around mt-3 items-center">
        <div className="flex justify-center items-center">
          <h2 className="font-bold text-xm md:text-sm lg:text-2xl">
            Total Workers:
            <span className="ml-3 text-secondary">
              {admin_State.totalWorkers}
            </span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="font-bold lg:text-2xl">
            Total Buyer:
            <span className="ml-3 text-yellow-400">
              {admin_State.totalBuyers}
            </span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="font-bold lg:text-2xl">
            Total Available coins:
            <span className="ml-3 text-green-400">
              {admin_State.totalAvailableCoins} $
            </span>
          </h2>
        </div>
      </div>
      {/* withdrawals collection  */}
      <h2 className="text-center text-xl my-3">Withdrawal Requests</h2>
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
                  <td className="flex gap-2 items-center justify-start">
                    <FaCoins className="text-yellow-400" />
                    {details.withdrawalCoins}
                  </td>
                  <td>{details.accountNumber}</td>
                  <td className=""> $ {details.withdrawAmount}</td>
                  <td>
                    <button
                      onClick={() => handleApprove(details)}
                      className="btn btn-sm bg-green-400 "
                    >
                      Success
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No Data Found
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
