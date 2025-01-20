import { Calendar, Users, DollarSign, ExternalLink, Link } from "lucide-react";
import { useEffect, useState } from "react";
import useAxiosPublic from "./../../../Hooks/UseAxios/useAxiosPublic";
import UseAuth from "./../../../Hooks/useAuth/UseAuth";
import { Link as RouterLink } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();
  useEffect(() => {
    axiosPublic.get("/mytasks").then((res) => {
      const data = res.data;
      // console.log(data);
      setTasks(data);
    });
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={task.image}
                alt="Task Thumbnail"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Active
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {task.title}
              </h3>

              <p className="text-gray-600 mb-4 font-medium">{task.email}</p>

              {/* Task Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  <span>Due:{task.deadline}</span>
                </div>

                <div className="flex items-center text-gray-700">
                  <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                  <span>${task.payableAmount}</span>
                </div>

                <div className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 mr-2 text-purple-600" />
                  <span>{task.requiredWorkers} Workers Required</span>
                </div>
              </div>

              {/* Button */}
              <RouterLink to={"/dashbord/taskDetails"}>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                  View Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </RouterLink>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      
      </div> */}
    </>
  );
};

export default TaskList;
