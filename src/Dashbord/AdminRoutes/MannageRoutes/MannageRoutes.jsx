import React, { useState } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxios/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Loading/Loading";
import { toast } from "react-toastify";

import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import DashbordTitle from "../../../Home/Shared/SectionTitle/DashbordTitle";

const MannageRoutes = () => {
  const axiosSecure = UseAxiosSecure();
  const [role, setRole] = useState("");
  const {
    data: UserDetails,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["data", axiosSecure],
    queryFn: async () => {
      const res = await axiosSecure.get("/userData");
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    toast.error(error);
    return null;
  }
  // delete section
  const handleDelete = (id) => {
    console.log(id);
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
        axiosSecure
          .delete(`/user/${id}`)
          .then((res) => {
            const success = res.data;
            console.log(success);
            if (success.deletedCount > 0) {
              return Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            const errorme = error.message;
            console.log(errorme);
            toast.error(errorme);
            return null;
          });
      }
    });
  };
  // update section
  const handleChange = (e, user) => {
    const role = e.target.value;
    try {
      axiosSecure.patch(`/user/${user._id}`, { role }).then((res) => {
        const result = res.data;
        if (result.modifiedCount) {
          toast.success("Role updated successfully");
          refetch();
        }
      });
    } catch (error) {
      toast.error("fail to update role", error);
    }
  };
  return (
    <div>
      <DashbordTitle
        heading={"All Users"}
        subHeading={"Total Avaible Users :" + UserDetails.length}
      />
      {/* table   */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* Head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Coins</th>
                <th className="flex gap-3 ">
                  <span className=" mr-6">Action</span>
                  <span className=" mx-3">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {UserDetails === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center text-xl font-bold">
                    No Data Found
                  </td>
                </tr>
              ) : (
                <>
                  {UserDetails.map((item, idx) => (
                    <tr key={item._id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={item.photo} alt="task_image" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{item.name}</td>
                      <td> {item.email}</td>
                      <td>{item.role}</td>
                      <td> {item.Coins}</td>
                      <td className="flex items-center  mt-3 gap-3">
                        <select
                          onChange={(e) => handleChange(e, item)}
                          className="border-2 border-secondary rounded-md"
                          name="roleChange"
                          value={item.role}
                          id=""
                        >
                          <option value="Worker">Worker</option>
                          <option value="Buyer">Buyer</option>
                          <option value="Admin">Admin</option>
                        </select>
                        <FaTrash
                          onClick={() => {
                            handleDelete(item._id);
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
    </div>
  );
};

export default MannageRoutes;
