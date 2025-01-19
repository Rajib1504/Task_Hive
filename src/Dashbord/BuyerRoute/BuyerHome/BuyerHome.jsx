import { use, useEffect, useState } from "react";
import UseAuth from "./../../../Hooks/useAuth/UseAuth";
import UseAxiosSecure from "./../../../Hooks/UseAxios/UseAxiosSecure";
const BuyerHome = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const [Buyer_data, setBuyer_data] = useState([]);
  const [pending_tasks, setPending_tasks] = useState(0);
  useEffect(() => {
    axiosSecure.get(`/mytasks/${user.email}`).then((res) => {
      const totalTasks = res.data;
      console.log(totalTasks);
      setBuyer_data(totalTasks);
      // total pending task calculation
      const totalPendding = totalTasks.reduce((total, tasks) => {
        return total + tasks.requiredWorkers;
      }, 0);
      console.log(totalPendding);
      setPending_tasks(totalPendding);
    });
  }, []);
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
            My Total Payment:<span className="ml-3">312</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default BuyerHome;
