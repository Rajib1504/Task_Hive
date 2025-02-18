import React from 'react';
import { ArrowRight, Heart, Clock, DollarSign } from 'lucide-react';
import Footer from '../../Home/Shared/Footer/Footer';
import Navbar from '../../Home/Shared/Navbar/Navbar';

const JobPost = ({ title, company, location, description, requirements, benefits }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 mb-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-blue-600 font-semibold mb-1">{company}</p>
        <p className="text-gray-600 mb-2 flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          {location}
        </p>
      </div>
      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
        Full-time
      </span>
    </div>

    <p className="text-gray-600 mb-4 mt-4">{description}</p>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-semibold mb-2 text-gray-800 flex items-center">
          <span className="w-1 h-6 bg-blue-500 rounded mr-2"></span>
          Requirements
        </h4>
        <ul className="space-y-2 text-gray-600">
          {requirements.map((req, index) => (
            <li key={index} className="flex items-start">
              <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2 text-gray-800 flex items-center">
          <span className="w-1 h-6 bg-green-500 rounded mr-2"></span>
          Benefits
        </h4>
        <ul className="space-y-2 text-gray-600">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <Heart className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <button disabled className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 opacity-75">
      <span>Coming soon...</span>
    </button>
  </div>
);

const CareersPage = () => {
  const jobPosts = [
    {
      title: "Software Engineer",
      company: "TaskHive",
      location: "Bangalore, India",
      description: "Join our team and build innovative solutions for micro-tasking.",
      requirements: ["Bachelor's degree in Computer Science", "3+ years of experience", "Strong programming skills"],
      benefits: ["Competitive salary", "Health insurance", "Flexible work hours"],
    },
    {
      title: "Marketing Manager",
      company: "TaskHive",
      location: "Remote",
      description: "Lead our marketing efforts and grow our user base.",
      requirements: ["Bachelor's degree in Marketing", "5+ years of experience", "Digital marketing expertise"],
      benefits: ["Competitive salary", "Performance bonuses", "Unlimited vacation"],
    },
    {
      title: "Customer Support Specialist",
      company: "TaskHive",
      location: "New York, USA",
      description: "Provide excellent support to our users and ensure their satisfaction.",
      requirements: ["Excellent communication skills", "Customer service experience", "Problem-solving abilities"],
      benefits: ["Competitive salary", "Health insurance", "Paid time off"],
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 p-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">We're Hiring!</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Join our team and help build the future of work</p>
        </div>

        <section className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Open Positions</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {jobPosts.map((job) => (
              <JobPost key={job.title} {...job} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Our Culture</h3>
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-600 text-lg leading-relaxed">
              At TaskHive, we foster a collaborative and inclusive work environment. We value innovation, creativity, and a passion for making a difference. We believe in empowering our employees and providing them with opportunities for growth and development.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Employee Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-all duration-300">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Health Insurance</h4>
              <p className="text-gray-600">Comprehensive health coverage for you and your family.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-all duration-300">
              <DollarSign className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Competitive Salaries</h4>
              <p className="text-gray-600">We offer competitive salaries and performance-based bonuses.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-all duration-300">
              <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Flexible Work</h4>
              <p className="text-gray-600">Enjoy flexible work arrangements and a healthy work-life balance.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CareersPage;