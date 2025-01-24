import useAxiosPublic from "../../../Hooks/UseAxios/useAxiosPublic";
import UseAuth from "../../../Hooks/useAuth/UseAuth";
import { useQuery } from "@tanstack/react-query";

import { toast } from "react-toastify";
import Loading from "./../../../Loading/Loading";

const WorkerHome = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();
  console.log(user.email);
  const {
    data = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["submition", user.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/submitDetails/${user?.email}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    toast.error("something went wrong" + error.message);
    return null;
  }
  console.log(data);
  // pending logic
  const pending = data.filter((item) => item.status === "pending");
  // console.log(pending.);
  // total income logic is created
  const income = data.reduce((total, item) => {
    return item.status === "Approved" ? total + item.payable_amount : total;
  }, 0);
  // console.log(income);
  const approve = data.filter((item) => item.status === "Approved");
  console.log(approve);
  return (
    <div>
      {/* state section  */}
      <div className="flex justify-around items-center">
        <div className="flex justify-center items-center">
          <h2 className="font-bold lg:text-2xl">
            Total Submission:<span className="ml-3">{data.length}</span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="font-bold lg:text-2xl">
            Pending submissions:<span className="ml-3">{pending.length}</span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="font-bold lg:text-2xl">
            My Total Earning:<span className="ml-3">${income}</span>
          </h2>
        </div>
      </div>
      {/* table section  */}
      <div className=" mt-3 overflow-x-auto">
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

            {approve.map((detail, idx) => (
              <tr key={detail._id}>
                <th>{idx + 1}</th>
                <td>{detail.task_title}</td>
                <td>$ {detail.payable_amount}</td>
                <td>{detail.Buyer_name}</td>
                <td>
                  <span className="badge bg-green-300  rounded-full px-3 py-2">
                    {detail.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkerHome;
