import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxios/UseAxiosSecure";
import UseAuth from "../../../Hooks/useAuth/UseAuth";
import { toast } from "react-toastify";

const Subbmissions = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const [fullDetails, setFullDetails] = useState([]);
  console.log(fullDetails);
  useEffect(() => {
    axiosSecure
      .get(`/submitData/${user.email}`)
      .then((res) => {
        const data = res.data;
        setFullDetails(data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);
  return (
    <>
      <div className="max-w-md mx-auto">
        <h3 className="text-lg sm:2xl md:4xl font-bold text-center pb-2 mb-4 border-b-2 ">
          {user?.displayName}'s Submitions count is {fullDetails.length}
        </h3>
      </div>
      {/* table for worker submitted data  */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Payment</th>
              <th>Buyer_name</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {fullDetails.map((detail, idx) => (
              <tr key={detail._id}>
                <th>{idx + 1}</th>
                <td>{detail.task_title}</td>
                <td>$ {detail.payable_amount}</td>
                <td>{detail.Buyer_name}</td>
                <td>
                  {" "}
                  {detail.status === "pending" && (
                    <span className="badge bg-secondary  rounded-full px-3 py-2">
                      {detail.status}
                    </span>
                  )}
                  {detail.status === "Approved" && (
                    <span className="badge bg-green-300  rounded-full px-3 py-2">
                      {detail.status}
                    </span>
                  )}
                  {detail.status === "Rejected" && (
                    <span className="badge bg-red-300  rounded-full px-3 py-2">
                      {detail.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Subbmissions;
