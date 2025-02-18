import React from 'react';
import Navbar from '../../Home/Shared/Navbar/Navbar';
import Footer from '../../Home/Shared/Footer/Footer';

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      designation: "CEO & Founder",
      role: "Leads the overall vision and strategy of TaskHive.",
      country: "United States",
      bio: "John is a passionate entrepreneur with a vision to revolutionize micro-tasking.  He believes in empowering individuals through flexible work opportunities.", // Optional bio
      social: { // Optional social links
        linkedin: "https://www.linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
      },
    },
    {
      name: "Jane Smith",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      designation: "CTO",
      role: "Oversees all technology and development aspects.",
      country: "Canada",
      bio: "Jane is a highly skilled software engineer with extensive experience in building scalable platforms. She's passionate about innovation.",
      social: {
        github: "https://github.com/janesmith",
      },
    },
    {
      name: "David Lee",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      designation: "Marketing Director",
      role: "Drives marketing strategies and user acquisition.",
      country: "United Kingdom",
      bio: "David is a creative marketer with a proven track record of growing online communities. He's passionate about connecting with users.",
      social: {
        instagram: "https://www.instagram.com/davidlee",
      },
    },
     {
      name: "Aisha Khan",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      designation: "Community Manager",
      role: "Builds and nurtures the TaskHive community.",
      country: "India",
      bio: "Aisha is a dedicated community builder with a passion for creating positive and supportive environments. She's passionate about empowering users.",
      
    },
  ];

  return (
    <section className=""> {/* Added background color and padding */}
    <Navbar/>
      <div className="w-full lg:w-11/12 mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"> {/* Responsive grid */}
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-md p-6 text-center"> {/* Card styling */}
              <div className="flex justify-center mb-4"> {/* Circle image container */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-32 h-32 object-cover border-2 border-white"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-1">{member.designation}</p>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-600 mb-2">From: {member.country}</p>
              {member.bio && <p className="text-gray-600 mb-4">{member.bio}</p>} {/* Conditionally render bio */}
              {member.social && ( // Conditionally render social links
                <div className="flex justify-center space-x-4">
                  {Object.entries(member.social).map(([platform, link]) => (
                    <a key={platform} href={link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
                      {/* Add social media icons here (e.g., Font Awesome) */}
                      {platform === "linkedin" && <span><i className="fab fa-linkedin"></i></span>}
                      {platform === "twitter" && <span><i className="fab fa-twitter"></i></span>}
                      {platform === "github" && <span><i className="fab fa-github"></i></span>}
                      {platform === "instagram" && <span><i className="fab fa-instagram"></i></span>}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Team;