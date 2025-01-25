import { Calendar, Users, DollarSign, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/UseAxios/useAxiosPublic";
import UseAuth from "../../../Hooks/useAuth/UseAuth";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();

  useEffect(() => {
    axiosPublic
      .get("/mytasks")
      .then((res) => {
        const data = res.data;
        setTasks(data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  const handleDetails = (id) => {
    navigate(`/dashbord/taskDetails/${id}`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Task List for {user?.displayName}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={task.image}
                  alt="Task Thumbnail"
                  className="w-full h-56 object-cover rounded-t-2xl"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                  Active
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 space-y-4">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {task.title}
                </h3>

                {/* Email */}
                <p className="text-sm text-gray-500">{task.email}</p>

                {/* Task Details */}
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700 text-sm">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    <span>Due: {task.deadline}</span>
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                    <span>${task.payableAmount}</span>
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <Users className="w-5 h-5 mr-2 text-purple-600" />
                    <span>{task.requiredWorkers} Workers Required</span>
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => handleDetails(task._id)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  View Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
