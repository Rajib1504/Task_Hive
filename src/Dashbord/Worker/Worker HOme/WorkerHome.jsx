import React, { useEffect } from "react";
import useAxiosPublic from "../../../Hooks/UseAxios/useAxiosPublic";
import UseAuth from "../../../Hooks/useAuth/UseAuth";
import { useQuery } from "@tanstack/react-query";

import { toast } from "react-toastify";
import Loading from "./../../../Loading/Loading";

const WorkerHome = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();
  console.log(user.email);
  const { data, error, isLoading } = useQuery({
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

  return (
    <div>
      <div className="flex justify-around items-center">
        <div className="flex justify-center items-center">
          <h2 className="font-bold lg:text-2xl">
            Total Submission:<span className="ml-3">{data.length}</span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="font-bold lg:text-2xl">
            Pending submissions:<span className="ml-3">12</span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="font-bold lg:text-2xl">
            My Total Earning:<span className="ml-3">$50</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WorkerHome;
