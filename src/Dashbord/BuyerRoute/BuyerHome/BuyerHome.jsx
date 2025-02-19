import { useEffect, useState } from "react";
import { FaListAlt, FaClock, FaDollarSign } from 'react-icons/fa';
import UseAuth from "./../../../Hooks/useAuth/UseAuth";
import UseAxiosSecure from "./../../../Hooks/UseAxios/UseAxiosSecure";
import { toast } from "react-toastify";
import useCoins from "../../../Hooks/UseCoins/UseCoins";
import { useQuery } from "@tanstack/react-query";
const BuyerHome = () => {
  const { user, loading } = UseAuth();
  // console.log(user.email);
  const axiosSecure = UseAxiosSecure();
  const [, , refetch] = useCoins();
  const [Buyer_data, setBuyer_data] = useState([]);
  const [pending_tasks, setPending_tasks] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  // for state preview
  const { data: buyer_State = {}, refetch: fetchState } = useQuery({
    queryKey: ["buyerStates", user.email],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure(`/buyer-stats/${user.email}`);
      return res.data;
    },
  });
  console.log(buyer_State);
  // for form preview

  const { data: fullDetails = [], refetch: fetchForm } = useQuery({
    queryKey: ["fulldetails"],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const data = await axiosSecure.get(`/submitDatas/${user.email}`);
      return data.data;
    },
  });
  // logic for get the status  === pending
  const pendingStatus = fullDetails.filter(
    (details) => details.status === "pending"
  );
  // for aprouve button
  const handleApprove = async (details) => {
    // console.log(details);
    // axiosSecure.patch("");
    const amount = details.payable_amount;
    const { data } = await axiosSecure.patch(`/approve/${details._id}`, {
      amount,
    });
    if (data.modifiedCount) {
      const workerEmail = details.worker_email;
      const notificationData = {
        message: ` you have earned ${details.payable_amount} from ${details.user?.email} for completing ${details.task_title}`,
        ToEmail: workerEmail,
        actionRoute: "/dashbord/worker-home",
        Time: new Date(),
      };

      const { data } = await axiosSecure.post(
        "/notification",
        notificationData
      );
      // console.log(data);
      toast.success("Task Accpted successfully");
      refetch();
      fetchState();
      fetchForm();
    }
    // console.log(data);
  };
  const handleReject = async (details) => {
    // console.log(details);
    try {
      const { data } = await axiosSecure.patch(
        `/approve/${details._id}?reject=${true}`
      );
      if (data.modifiedCount) {
        const workerEmail = details.worker_email;
        const notificationData = {
          message: `${details.task_title} has been rejected`,
          ToEmail: workerEmail,
          actionRoute: "/dashbord/worker-home",
          Time: new Date(),
        };

        const { data } = await axiosSecure.post(
          "/notification",
          notificationData
        );

        toast.success("Task Rejected successfully");
        refetch();
        fetchState();
        fetchForm();
      }
    } catch (error) {
      toast.error(error);
    }
  };
  // chart  
  const chart = [
    { name: "Total Purchase", value:buyer_State .pendingTaskCount },
    { name: "Total Task", value: buyer_State.totalPayment },
    { name: "Submissions", value: buyer_State.totalTaskCount }
  ];
  return (
    <>
    

{/* buyer state section */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
  {/* Total Tasks Card */}
  <div className="flex items-center p-6 bg-white rounded-lg shadow-sm border-l-4 border-blue-500">
    <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
      <FaListAlt className="w-8 h-8" />
    </div>
    <div>
      <p className="mb-2 text-sm font-medium text-gray-600">Total Tasks</p>
      <p className="text-2xl font-semibold text-gray-700">
        {buyer_State.totalTaskCount}
      </p>
    </div>
  </div>

  {/* Pending Tasks Card */}
  <div className="flex items-center p-6 bg-white rounded-lg shadow-sm border-l-4 border-yellow-500">
    <div className="p-3 mr-4 bg-yellow-500 text-white rounded-full">
      <FaClock className="w-8 h-8" />
    </div>
    <div>
      <p className="mb-2 text-sm font-medium text-gray-600">Pending Tasks</p>
      <p className="text-2xl font-semibold text-gray-700">
        {buyer_State.pendingTaskCount}
      </p>
    </div>
  </div>

  {/* Total Payment Card */}
  <div className="flex items-center p-6 bg-white rounded-lg shadow-sm border-l-4 border-green-500">
    <div className="p-3 mr-4 bg-green-500 text-white rounded-full">
      <FaDollarSign className="w-8 h-8" />
    </div>
    <div>
      <p className="mb-2 text-sm font-medium text-gray-600">Total Payment</p>
      <p className="text-2xl font-semibold text-gray-700">
        ${buyer_State.totalPayments}
      </p>
    </div>
  </div>
</div>
      {/* Buyer form with submition details   */}
      <div className="overflow-x-auto mt-2 sm:mt-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Worker_Name</th>
              <th className=" text-left pl-6">Title</th>
              <th>Amount</th>
              <th className="text-left pl-10 ">Details</th>
              <th className="text-left pl-10">Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingStatus.length > 0 ? (
              pendingStatus.map((details, idx) => (
                <tr key={details._id}>
                  <th>{idx + 1}</th>
                  <td>{details.worker_name}</td>
                  <td>{details.task_title}</td>
                  <td> $ {details.payable_amount}</td>
                  <td>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                      className="btn btn-sm"
                    >
                      Submition Details
                    </button>
                  </td>
                  <td className="flex gap-2 items-center">
                    <button
                      onClick={() => handleApprove(details)}
                      className="btn btn-sm bg-green-400 "
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(details)}
                      className="btn btn-sm bg-red-400 "
                    >
                      Reject
                    </button>
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

      {/* popup with full details  */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center mb-2">
            Submition Details
          </h3>
          {fullDetails.map((data) => (
            <p key={data._id} className="p-2 border-2 rounded-md">
              {data.submission_details}
            </p>
          ))}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-outline">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default BuyerHome;
