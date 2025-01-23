import React from "react";
import UseAxiosSecure from "../../../Hooks/UseAxios/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Loading/Loading";
import { toast } from "react-toastify";
import SectionTitle from "../../../Home/Shared/SectionTitle/SectionTitle";
import { FaEdit, FaTrash } from "react-icons/fa";

const MannageRoutes = () => {
  const axiosSecure = UseAxiosSecure();
  const {
    data: UserDetails,
    isLoading,
    error,
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
  console.log(UserDetails);
  return (
    <div>
      <SectionTitle
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
                <th>Action</th>
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
                        <FaEdit
                          // onClick={() => handleUpdate(item)}
                          className="text-secondary lg:text-xl cursor-pointer"
                        />
                        <FaTrash
                          // onClick={() => {
                          //   handleDelete(item);
                          // }}
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
