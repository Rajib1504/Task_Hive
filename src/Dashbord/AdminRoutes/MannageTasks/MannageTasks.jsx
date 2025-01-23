import React from "react";
import UseAxiosSecure from "../../../Hooks/UseAxios/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Loading/Loading";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import DashbordTitle from "../../../Home/Shared/SectionTitle/DashbordTitle";

const MannageTasks = () => {
  const axiosSecure = UseAxiosSecure();
  const {
    data: tasks = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["data", axiosSecure],
    queryFn: async () => {
      const res = await axiosSecure.get("/allmytasks");
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (error) {
    toast.error(error);
    return null;
  }
  // console.log(tasks);
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
        axiosSecure.delete(`/mytask/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0)
            Swal.fire({
              title: "Deleted!",
              text: `Your task has been deleted.`,
              icon: "success",
            });
        });
      }
    });
  };
  return (
    <div>
      <DashbordTitle heading={""}></DashbordTitle>
      {/* table  */}
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
            {tasks === 0 ? (
              <tr>
                <td colSpan="4" className="text-center text-xl font-bold">
                  No Data Found
                </td>
              </tr>
            ) : (
              <>
                {tasks.map((item, idx) => (
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
  );
};

export default MannageTasks;
