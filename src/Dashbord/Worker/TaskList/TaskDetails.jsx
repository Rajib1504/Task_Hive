import React, { useEffect, useState } from "react";
import { Calendar, DollarSign, Users, FileText } from "lucide-react";
import UseAxiosSecure from "../../../Hooks/UseAxios/UseAxiosSecure";
import { useParams } from "react-router-dom";
import Loading from "../../../Loading/Loading";
import { toast } from "react-toastify";
import UseAuth from "../../../Hooks/useAuth/UseAuth";

const TaskDetails = () => {
  const axiosSecure = UseAxiosSecure();
  const [taskDetails, setTaskDetails] = useState(null);
  //   console.log(taskDetails);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = UseAuth();
  console.log(user);
  //   console.log(taskDetails);
  const params = useParams();
  //   console.log(params.id);
  const id = params.id;
  useEffect(() => {
    axiosSecure
      .get(`/mytask/${id}`)
      .then((res) => {
        const data = res.data;
        setTaskDetails(data);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setIsLoading(false);
      });
  }, [id]);
  if (isLoading) {
    return <Loading></Loading>;
  }

  //     form area for submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const submited_data = e.target.submitionDetails.value;
    //     console.log(submited_data);
    document.getElementById("my_modal_3").close();
    const Worker_submitions_data = {
      task_id: taskDetails?._id,
      task_title: taskDetails?.title,
      payable_amount: taskDetails?.payableAmount,
      worker_email: user?.email,
      submission_details: submited_data,
      worker_name: user?.displayName,
      Buyer_name: taskDetails?.name,
      Buyer_email: taskDetails?.email,
      current_date: new Date().toISOString().split("T")[0],
      status: "pending",
    };

    axiosSecure
      .post("/submitData", Worker_submitions_data)
      .then((res) => {
        const result = res.data;
        //   console.log(result);
        if (result.insertedId) {
          toast.success(
            `${user.displayName}'s Request has been taken successfully`
          );
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="min-h-screen  bg-gray-50">
      {/* Hero Section with Image */}
      <div className="relative h-36 sm:h-80 md:h-96 lg:h-96 w-full">
        <img
          src={taskDetails?.image}
          alt="Job Cover"
          className="w-full h-full object-center object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto px-4 h-full flex items-end pb-4 sm:pb-6 md:pb-8">
            <div className="text-white">
              <h1 className="text-md sm:text-3xl md:text-4xl font-bold mb-2">
                {taskDetails?.title}
              </h1>
              <div className="flex items-center space-x-2">
                <span className="bg-blue-600 px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                  Active Job
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className=" container mx-auto px-0 sm:px-4 py-6 sm:py-8 md:py-10">
        <div className="grid  grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Details Card */}
            <div className="bg-white rounded-xl w-full shadow-sm py-2 sm:p-6">
              <h2 className="text-lg text-center sm:text-left sm:text-2xl font-bold mb-4 text-gray-800">
                Job Details
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm  text-center sm:text-left sm:text-base">
                {taskDetails?.details}
              </p>
            </div>

            {/* Submission Information Card */}
            <div className="bg-white text-center sm:text-left  rounded-xl shadow-sm pt-2 sm:p-6">
              <h2 className="text-lg sm:text-2xl font-bold mb-4 text-gray-800">
                Submission Information
              </h2>
              <div className="flex justify-center sm:justify-start items-start space-x-2">
                <FileText className=" hidden sm:block w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1" />
                <p className="text-gray-600 leading-relaxed text-sm  sm:text-left sm:text-base">
                  {taskDetails?.submissionInfo}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 sticky top-4">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-800 text-center sm:text-left">
                Job Overview
              </h3>

              {/* Job Stats */}
              <div className="space-y-4 sm:space-y-6">
                {/* Deadline */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 sm:justify-between">
                  <div className="flex flex-col sm:flex-row  justify-center sm:justify-start gap-2 sm:gap-0 items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <span className="text-gray-600 text-sm sm:text-base">
                      Deadline
                    </span>
                  </div>
                  <span className="font-semibold text-sm sm:text-base">
                    {taskDetails?.deadline}
                  </span>
                </div>

                {/* Payment */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 sm:justify-between">
                  <div className="flex flex-col sm:flex-row  justify-center sm:justify-start gap-2 sm:gap-0 items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <span className="text-gray-600 text-sm sm:text-base">
                      Payment
                    </span>
                  </div>
                  <span className="font-semibold text-sm sm:text-base">
                    {taskDetails?.payableAmount}
                  </span>
                </div>

                {/* Required Workers */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 sm:justify-between">
                  <div className="flex flex-col sm:flex-row  justify-center sm:justify-start gap-2 sm:gap-0 items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                    <span className="text-gray-600 text-sm sm:text-base">
                      Workers Needed
                    </span>
                  </div>
                  <span className="font-semibold text-sm sm:text-base">
                    {taskDetails?.requiredWorkers}
                  </span>
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="w-full mt-6 sm:mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:py-3 rounded-lg transition-colors duration-200"
              >
                Submit task
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* model for submition  */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit}>
            <h3 className="font-bold text-center text-lg sm:text-xl md:text-2xl">
              Submission Details{" "}
            </h3>
            <p className="py-4">Submit your work details bellow:</p>

            <textarea
              name="submitionDetails"
              className="textarea p-2 textarea-bordered textarea-lg w-full "
            ></textarea>
            {/* task submition Button */}
            <button className="w-full mt-4 sm:mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:py-3 rounded-lg transition-colors duration-200">
              Submit Your Work
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default TaskDetails;
