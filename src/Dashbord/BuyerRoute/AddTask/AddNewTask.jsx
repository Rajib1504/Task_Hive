import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/UseAxios/useAxiosPublic";
import UseAxiosSecure from "../../../Hooks/UseAxios/UseAxiosSecure";
import { toast } from "react-toastify";
import UseAuth from "../../../Hooks/useAuth/UseAuth";
import { useNavigate } from "react-router-dom";

const AddNewTask = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure();
  const image_hosting_key = import.meta.env.VITE_Image_Hosting_key;
  const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const { user } = UseAuth();
  const [buyer, setBuyer] = useState({});
  useEffect(() => {
    axiosPublic.get(`/user/${user.email}`).then((res) => {
      const userDetails = res.data;
      setBuyer(userDetails);
    });
  }, []);
  // console.log(buyer?.Coins);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    // calculation for coins
    const worker = data.requiredWorkers;
    const amount = parseFloat(data.payableAmount);
    // console.log(amount);
    const TotalCost = parseFloat(worker * amount);
    // console.log(TotalCost);
    if (buyer.Coins < TotalCost) {
      toast.warning("insufficient Coin.  Purchase Coin");
      navigate("/dashbord/purchaseCoins");
      return;
    }

    // image uploade to the data base and get an url
    const imagefile = { image: data.image[0] };
    // set a file with the header because we can't add it with stringify because we nee it as a link
    const res = await axiosPublic.post(image_upload_api, imagefile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // console.log(res.data);
    // if()
    if (res.data.success) {
      // now sent the imge to the database
      const taskData = {
        title: data.title,
        email: user.email,
        details: data.details,
        image: res.data.data.display_url,
        deadline: data.deadline,
        payableAmount: amount,
        requiredWorkers: worker,
        submissionInfo: data.submissionInfo,
      };
      // console.log(taskData);
      const taskitems = await axiosSecure.post("/addtask", taskData);
      if (taskitems.data.insertedId) {
        toast.success("Task has been added successfully");
        // // deduct coins
        // setBuyer((prevBuyer) => ({
        //   ...prevBuyer,
        //   Coins: prevBuyer.Coins - TotalCost,
        // }));
        // Update coins in database
        await axiosSecure.post("/updatecoins", {
          email: buyer.email,
          newCoins: buyer.Coins - TotalCost,
        });
        // toast.success("Coins deducted successfully");
      }
    } else {
      toast.error("Image upload failed. Please try again.");
    }
  };
  return (
    <div>
      {/* {"Add an item"}
      {"What's new?"} */}
      <div className="flex flex-col gap-2 my-3">
        <h3 className="font-bold text-2xl text-center">Add an Task</h3>
      </div>

      {/* from is starting from here  */}
      <div className="shadow-md rounded-md bg-base-200 mx-auto max-w-xl p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* title  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="Title" className="font-semibold">
              Task_title
            </label>
            <input
              type="text"
              placeholder={"Task_Title"}
              {...register("title", { required: "Task_title is required" })}
              className=" pl-3 h-8 rounded-lg"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>
          {/* task details  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="task_details" className="font-semibold mt-2">
              Task_Details
            </label>
            <input
              type="text"
              placeholder={"Task_Details"}
              {...register("details", { required: "Task_details is required" })}
              className=" pl-3 h-8 rounded-lg"
            />
            {errors.details && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>
          {/* required workers  */}

          <div className="flex flex-col gap-2">
            <label htmlFor="required_workers" className="font-semibold">
              Required_workers
            </label>
            <input
              type="number"
              placeholder={"90"}
              {...register("requiredWorkers", {
                required: "number of worker should not be empty",
                valueAsNumber: true,
              })}
              className=" pl-3 h-8 rounded-lg"
            />
            {errors.requireWorkers && (
              <p className="text-red-500 text-sm">{errors.register.message}</p>
            )}
          </div>
          {/* payble_amount  */}
          <div className="flex flex-col gap-2 ">
            <label htmlFor="payable_amount " className="font-semibold">
              Payable_amount
            </label>
            <input
              type="number"
              placeholder={"100 $ "}
              {...register("payableAmount", {
                required: "without money we are not accpting any tasks",
                valueAsNumber: true,
              })}
              className=" pl-3 h-8 rounded-lg"
            />
            {errors.payableAmount && (
              <p className="text-red-500 text-sm">
                {errors.payableAmount.message}
              </p>
            )}
          </div>

          {/* Task_deadline  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="Deadline mt-2 " className="font-semibold">
              Task_Deadline
            </label>
            <input
              type="date"
              {...register("deadline", { required: "deadline is needed" })}
              className=" pl-3 h-8 rounded-lg"
            />
            {errors.deadline && (
              <p className="text-red-500 text-sm">{errors.deadline.message}</p>
            )}
          </div>
          {/* submission_info  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="submition mt-2 " className="font-semibold">
              Submission_info
            </label>
            <input
              type="text"
              placeholder={"screenshot,proof  "}
              {...register("submissionInfo", {
                required: "Submission info is required",
              })}
              className=" pl-3 h-8 rounded-lg"
            />
            {errors.submissionInfo && (
              <p className="text-red-500 text-sm">
                {errors.submissionInfo.message}
              </p>
            )}
          </div>
          {/* task_image  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="task_image mt-2 " className="font-semibold">
              Task_image
            </label>
            <input
              {...register("image", { required: "image is required" })}
              type="file"
              className=" text file-input w-full max-w-xs"
            />
            {errors.taskImage && (
              <p className="text-red-500 text-sm">{errors.taskImage.message}</p>
            )}
            {/* <input
              type="url"
              placeholder="Task_image"
              {...register("taskImage ", { required: "image is required" })}
              className=" pl-3 h-8 rounded-lg"
            /> */}
          </div>
          {/* submit button  */}
          <div className="flex justify-center mt-4">
            <input
              className="btn border-borderColor border-2 bg-primary  w-11/12"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewTask;
