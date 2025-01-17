import { Briefcase, Clock, CheckCircle } from "lucide-react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const TotalWork = () => {
  return (
    <div className="py-16 px-4">
      <SectionTitle
        heading={"Our Platform at a Glance"}
        subHeading={
          "Discover the impact we've made and the opportunities waiting for you."
        }
      ></SectionTitle>
      {/* section start  */}

      <div className="max-w-6xl mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-500 group">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                <Briefcase className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="md:text-4xl text-3xl font-bold text-gray-800">
                980
              </h2>
              <p className="text-lg text-gray-600 font-medium">Total Works</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-500 group">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-green-50 rounded-full group-hover:bg-green-100 transition-colors duration-300">
                <Clock className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="md:text-4xl text-3xl font-bold text-gray-800">
                245
              </h2>
              <p className="text-lg text-gray-600 font-medium">Active Works</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-500 group">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-purple-50 rounded-full group-hover:bg-purple-100 transition-colors duration-300">
                <CheckCircle className="w-10 h-10 text-purple-600" />
              </div>
              <h2 className="md:text-4xl text-3xl font-bold text-gray-800">
                735
              </h2>
              <p className="text-lg text-gray-600 font-medium">
                Finished Works
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalWork;
