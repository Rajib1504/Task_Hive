import { useEffect, useState } from "react";
import UseAxiosSecure from "./../../../Hooks/UseAxios/UseAxiosSecure";
import UseAuth from "./../../../Hooks/useAuth/UseAuth";
import { FaEdit, FaTrash } from "react-icons/fa";

import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/UseAxios/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const MyTasks = () => {
  // const [Buyer_details, setBuyer_details] = useState([]);
  const [openModal, setIsModalOpen] = useState(false);
  const [task, setTask] = useState({});
  const [buyer, setBuyer] = useState({});
  // console.log(Buyer_details);
  const axiosSecure = UseAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();
  useEffect(() => {
    axiosPublic.get(`/user/${user.email}`).then((res) => {
      const userDetails = res.data;
      setBuyer(userDetails);
      refetch();
    });
  }, []);

  const { data: Buyer_details = [], refetch } = useQuery({
    queryKey: ["data", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/mytasks/${user?.email}`);
      return res.data.sort(
        (a, b) => new Date(b.deadline) - new Date(a.deadline)
      );
    },
  });

  // open model
  const handleUpdate = (item) => {
    // console.log(item);
    setIsModalOpen(true);
    setTask(item);
  };
  // close model
  const closeModel = () => {
    setIsModalOpen(false);
    setTask(null);
  };
  // update form
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = {
      title: form.title.value,
      image: form.image.value,
      details: form.details.value,
      payableAmount: parseFloat(form.payableAmount.value),
      requiredWorkers: parseFloat(form.requiredWorkers.value),
      deadline: task.deadline,
      submissionInfo: form.submissionInfo.value,
      email: form.email.value,
    };
    axiosSecure
      .put(`/mytasks/${task._id}`, updatedData)
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Task has Updated successfully");
          closeModel(true);
          refetch();
        } else {
          toast.error("something went wrong");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  // delete
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/mytasks/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            const TotalCost = parseFloat(
              item?.requiredWorkers * item?.payableAmount
            );
            // Update coins in database
            axiosSecure.post("/updatecoins", {
              email: buyer.email,
              newCoins: buyer.Coins + TotalCost,
            });
            refetch();
          }
        });
        Swal.fire({
          title: "Deleted!",
          text: `Your task has been deleted.`,
          icon: "success",
        });
      }
    });
  };
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
              {Buyer_details === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center text-xl font-bold">
                    No Data Found
                  </td>
                </tr>
              ) : (
                <>
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
                        <FaEdit
                          onClick={() => handleUpdate(item)}
                          className="text-secondary lg:text-xl cursor-pointer"
                        />
                        <FaTrash
                          onClick={() => {
                            handleDelete(item);
                          }}
                          className="text-red-500 lg:text-xl cursor-pointer ml-4"
                        />
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {openModal && task && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative overflow-y-auto"
            style={{ maxHeight: "90vh" }}
          >
            <button
              onClick={closeModel}
              className="absolute top-4 right-4 text-gray-500 text-2xl hover:text-gray-800"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-center mb-4">Update Task</h2>
            <form onSubmit={handleSubmit}>
              {/* task Name */}
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={task?.title}
                  className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100"
                />
              </div>

              {/* task details */}
              <div className="mb-4">
                <label className="block text-gray-700">Task Details</label>
                <input
                  type="text"
                  name="details"
                  defaultValue={task?.details}
                  className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100"
                />
              </div>
              {/* task imgae*/}
              <div className="mb-4">
                <label className="block text-gray-700">Task_image</label>
                <input
                  type="text"
                  name="image"
                  defaultValue={task.image}
                  readOnly={true}
                  className="w-full px-4 py-2 mt-1 border text-gray-400 rounded-lg bg-gray-100"
                />
              </div>
              {/* payment amount*/}
              <div className="mb-4">
                <label className="block text-gray-700">Payment Rate</label>
                <input
                  type="text"
                  name="payableAmount"
                  defaultValue={task?.payableAmount}
                  readOnly={true}
                  className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100 text-gray-400"
                />
              </div>
              {/* require workers */}
              <div className="mb-4">
                <label className="block text-gray-700">Require Workers</label>
                <input
                  type="text"
                  name="requiredWorkers"
                  defaultValue={task?.requiredWorkers}
                  readOnly={true}
                  className="w-full px-4 py-2 mt-1 border rounded-lg text-gray-400 bg-gray-100"
                />
              </div>
              {/* Expiry Date */}
              <div className="mb-4">
                <label className="block text-gray-700">Last Date</label>
                <input
                  type="text"
                  name="deadline"
                  defaultValue={task?.deadline}
                  readOnly={true}
                  className="w-full px-4 py-2 mt-1 border rounded-lg text-gray-400 bg-gray-100"
                />
              </div>
              {/* submition info */}
              <div className="mb-4">
                <label className="block text-gray-700">What to submit</label>
                <input
                  type="text"
                  name="submissionInfo"
                  defaultValue={task?.submissionInfo}
                  className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100"
                  placeholder="Add any additional notes..."
                />
              </div>
              {/* user details*/}
              <div className="mb-4">
                <label className="block text-gray-700">User details</label>
                <input
                  type="text"
                  name="email"
                  defaultValue={task?.email}
                  readOnly={true}
                  className="w-full px-4 py-2 mt-1 border rounded-lg text-gray-400 bg-gray-100"
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn px-4 py-2 bg-buttonColor text-white font-semibold rounded-lg hover:bg-buttonHover"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTasks;
