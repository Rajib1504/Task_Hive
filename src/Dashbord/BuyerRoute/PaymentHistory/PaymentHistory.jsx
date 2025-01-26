import React from "react";
import UseAxiosSecure from "../../../Hooks/UseAxios/UseAxiosSecure";
import UseAuth from "../../../Hooks/useAuth/UseAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Loading/Loading";
import { toast } from "react-toastify";
import DashbordTitle from "../../../Home/Shared/SectionTitle/DashbordTitle";

const PaymentHistory = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const {
    data: Payments = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["PaymentHistory", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/history/${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (error) {
    toast.error(error.message);
    return null;
  }
  // console.log(Payments);
  return (
    <div>
      <DashbordTitle heading={"Payment History"}></DashbordTitle>
      <div>
        {/* table section for payment history  */}
        {/* table section  */}
        <div className=" mt-3 overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Transaction Id</th>
                <th>Payment</th>
                <th>Buyer_Email</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {Payments?.map((detail, idx) => (
                <tr key={detail._id}>
                  <th>{idx + 1}</th>
                  <td>{detail.transactionId}</td>
                  <td>$ {detail.price}</td>
                  <td>{detail.email}</td>
                  <td>
                    <span className="badge bg-green-300  rounded-full px-3 py-2">
                      Success
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
