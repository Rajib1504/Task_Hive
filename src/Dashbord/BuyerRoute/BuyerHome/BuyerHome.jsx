import { useEffect, useState } from "react";
import UseAuth from "./../../../Hooks/useAuth/UseAuth";
import UseAxiosSecure from "./../../../Hooks/UseAxios/UseAxiosSecure";
const BuyerHome = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const [Buyer_data, setBuyer_data] = useState([]);
  const [pending_tasks, setPending_tasks] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [fullDetails, setFullDetails] = useState([]);
  console.log("fulldetails is here", fullDetails);
  // for state preview
  useEffect(() => {
    axiosSecure.get(`/mytasks/${user.email}`).then((res) => {
      const totalTasks = res.data;
      // console.log(totalTasks);
      setBuyer_data(totalTasks);
      // total pending task calculation
      const totalPendding = totalTasks.reduce((total, tasks) => {
        return total + tasks.requiredWorkers;
      }, 0);
      // console.log(totalPendding);
      setPending_tasks(totalPendding);

      // total payment calculate
      const Payment = totalTasks.reduce((total, tasks) => {
        return total + tasks.payableAmount * tasks.requiredWorkers;
      }, 0);
      setTotalPayment(Payment);
    });
  }, []);
  // for form preview

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
  }, [axiosSecure, user]);
  // logic for get the status  === pending
  const pendingStatus = fullDetails.filter(
    (details) => details.status === "pending"
  );
  return (
    <>
      {/* buyer state section  */}
      <div className="flex justify-around items-center">
        <div className="flex justify-center items-center">
          <h2 className="font-bold lg:text-2xl">
            My Total Tasks:<span className="ml-3">{Buyer_data.length}</span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="font-bold lg:text-2xl">
            Pendding Tasks:<span className="ml-3">{pending_tasks}</span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="font-bold lg:text-2xl">
            My Total Payment:<span className="ml-3">${totalPayment}</span>
          </h2>
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
              <th>Title</th>
              <th>Amount Color</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingStatus.length > 0 ? (
              pendingStatus.map((details, idx) => (
                <tr key={details._id}>
                  <th>{idx + 1}</th>
                  <td>{details.worker_name}</td>
                  <td>{details.task_title}</td>
                  <td>{details.payable_amount}</td>
                  <td>
                    <button className="btn btn-sm">Submition Details</button>
                  </td>
                  <td>
                    <select name="Action" id="">
                      <option value="Approve ">Approve</option>
                      <option value="Reject  ">Reject</option>
                    </select>
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
    </>
  );
};

export default BuyerHome;
