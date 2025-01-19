import React, { useEffect, useState } from "react";
import UseAxiosSecure from "./../../../Hooks/UseAxios/UseAxiosSecure";
import UseAuth from "./../../../Hooks/useAuth/UseAuth";
import { FaEdit, FaTrash } from "react-icons/fa";

const MyTasks = () => {
  const [Buyer_details, setBuyer_details] = useState([]);
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  useEffect(() => {
    axiosSecure
      .get(`/mytasks/${user?.email}`)
      .then((res) => {
        const Buyer_details = res.data;
        setBuyer_details(Buyer_details);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <h2 className="font-bold text-center my-4 text-3xl">My Tasks</h2>
      {/* table  */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>Sl</label>
                </th>
                <th>Task_Tittle</th>
                <th>Deadline</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* body is staring of  table  */}
              {Buyer_details.map((item, idx) => (
                <tr key={item._id}>
                  <th>
                    <label>{idx + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt="task_image" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.title}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.deadline}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Worker need : {item.requiredWorkers}
                    </span>
                    <span className="badge badge-ghost badge-sm">
                      Payble amount : {item.payableAmounts}
                    </span>
                  </td>
                  <span>
                    <td>
                      <FaEdit className="text-secondary lg:text-xl"></FaEdit>
                    </td>
                    <td>
                      <FaTrash className="text-red-500 lg:text-xl"></FaTrash>
                    </td>
                  </span>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
