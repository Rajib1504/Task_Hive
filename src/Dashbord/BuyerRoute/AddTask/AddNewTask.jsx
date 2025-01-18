import { useForm } from "react-hook-form";

const AddNewTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      {/* {"Add an item"}
      {"What's new?"} */}
      <div className="flex flex-col gap-2 my-3">
        <h3 className="font-bold text-2xl text-center">Add an Task</h3>
      </div>

      {/* from is starting from here  */}
      <div className="shadow-md rounded-md bg-base-200 max-w-xl p-4">
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
          <div className="flex mt-2 justify-between items-center">
            <div className="flex flex-col gap-2">
              <label htmlFor="required_workers" className="font-semibold">
                Required_workers
              </label>
              <input
                type="number"
                placeholder={"90"}
                {...register("requiredWorkers", {
                  required: "number of worker should not be empty",
                })}
                className=" pl-3 h-8 rounded-lg"
              />
              {errors.requireWorkers && (
                <p className="text-red-500 text-sm">
                  {errors.register.message}
                </p>
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
                })}
                className=" pl-3 h-8 rounded-lg"
              />
              {errors.payableAmount && (
                <p className="text-red-500 text-sm">
                  {errors.payableAmount.message}
                </p>
              )}
            </div>
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
            {/* <input
              {...register("image", { required: true })}
              type="file"
              className=" text file-input w-full max-w-xs"
            /> */}
            <input
              type="url"
              placeholder="Task_image"
              {...register("taskImage ", { required: "image is required" })}
              className=" pl-3 h-8 rounded-lg"
            />
            {errors.taskImage && (
              <p className="text-red-500 text-sm">{errors.taskImage.message}</p>
            )}
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
