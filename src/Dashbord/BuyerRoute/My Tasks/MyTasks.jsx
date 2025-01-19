import { useEffect, useState } from "react";
import UseAxiosSecure from "./../../../Hooks/UseAxios/UseAxiosSecure";
import UseAuth from "./../../../Hooks/useAuth/UseAuth";
import { FaEdit, FaTrash } from "react-icons/fa";
import { data } from "react-router-dom";

const MyTasks = () => {
  const [Buyer_details, setBuyer_details] = useState([]);
  // console.log(Buyer_details);
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();

  useEffect(() => {
    axiosSecure
      .get(`/mytasks/${user?.email}`)
      .then((res) => {
        const Buyer_details = res.data;
        const sorted_data = Buyer_details.sort(
          (a, b) => new Date(b.deadline) - new Date(a.deadline)
        );

        setBuyer_details(sorted_data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [axiosSecure, user?.email]);

  return (
    <div>
      <h2 className="font-bold text-center my-4 text-3xl">My Tasks</h2>
      {/* Table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* Head */}
            <thead>
              <tr>
                <th>
                  <label>Sl</label>
                </th>
                <th>Task_Title</th>
                <th>Deadline</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Body of the Table */}
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
                        <div className="flex items-center justify-center gap-2 ">
                          <div className="text-sm opacity-50 badge">
                            vacancy:{item.requiredWorkers}
                          </div>
                          <div className="text-sm opacity-50 badge">
                            payment: $ {item.payableAmount}
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>Last Date: {item.deadline}</td>
                  <td className="flex items-center gap-3">
                    <FaEdit className="text-secondary lg:text-xl cursor-pointer" />
                    <FaTrash className="text-red-500 lg:text-xl cursor-pointer ml-4" />
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

export default MyTasks;
