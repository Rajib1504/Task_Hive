import React from "react";
import { Briefcase, Clock, CheckCircle } from "lucide-react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const StatCard = ({
  icon: Icon,
  number,
  label,
  bgColor,
  borderColor,
  iconColor,
}) => (
  <div
    className={`
    bg-white rounded-2xl shadow-lg overflow-hidden 
    transform transition-all duration-300 hover:-translate-y-4 
    hover:shadow-2xl border ${borderColor} 
    relative group
  `}
  >
    <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
    <div className="p-8 relative z-10 text-center">
      <div
        className={`
        mx-auto w-20 h-20 mb-6 rounded-full 
        flex items-center justify-center 
        transition-all duration-300 
        ${bgColor} ${iconColor}
      `}
      >
        <Icon className="w-10 h-10" />
      </div>
      <h2 className="text-4xl font-bold text-gray-800 mb-3">{number}</h2>
      <p className="text-lg text-gray-600 font-medium">{label}</p>
    </div>
  </div>
);

const TotalWork = () => {
  const stats = [
    {
      icon: Briefcase,
      number: 980,
      label: "Total Works",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200 hover:border-blue-500",
      iconColor: "text-blue-600",
    },
    {
      icon: Clock,
      number: 245,
      label: "Active Works",
      bgColor: "bg-green-100",
      borderColor: "border-green-200 hover:border-green-500",
      iconColor: "text-green-600",
    },
    {
      icon: CheckCircle,
      number: 735,
      label: "Finished Works",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200 hover:border-purple-500",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <SectionTitle
        heading={"Our Platform at a Glance"}
        subHeading={
          "Discover the impact we've made and the opportunities waiting for you."
        }
      />
      <div className="max-w-6xl mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalWork;
