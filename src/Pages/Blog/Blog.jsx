import { useState, useEffect } from "react";
import Footer from "../../Home/Shared/Footer/Footer";
import Navbar from "../../Home/Shared/Navbar/Navbar";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlog, setExpandedBlog] = useState(null);

  useEffect(() => {
    // Mock data for the blog page
    const blogData = [
      {
        id: 1,
        title: "How to Succeed in Micro-Tasking",
        image: "https://i.ibb.co/GZXP21y/images.png", 
        excerpt: "Discover the best strategies to maximize your earnings on TaskHive.",
        content: "Micro-tasking is an excellent way to earn money online. Here are some tips to help you succeed... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 2,
        title: "Top 10 Tasks to Earn Quick Coins",
        image: "https://i.ibb.co/vvMvymmd/Earni-770x433.jpg", // Replace with your image URL
        excerpt: "Looking for quick tasks to boost your balance? Here are the best ones!",
        content: "Some tasks are more profitable than others. Let’s explore the top 10 quick tasks... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 3,
        title: "Buyer Tips: How to Get Quality Work",
        image: "https://i.ibb.co/LXrfvrpX/quality-lg-cropped.webp", // Replace with your image URL
        excerpt: "Buyers, here’s how you can ensure high-quality work from workers on TaskHive.",
        content: "If you’re a buyer, getting the best results from workers is crucial. Here’s how to do it... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
        {
              "id": 7,
              "title": "Boosting Your Productivity with Pomodoro Technique",
              "image": "https://i.ibb.co/prdZYWZy/1691439312592.png",
              "excerpt": "Learn how to use the Pomodoro Technique to maximize your focus and get more done.",
              "content": "The Pomodoro Technique is a time management method that uses 25-minute focused work intervals separated by short breaks... (full content)"
            },
            {
              "id": 8,
              "title": "The Art of Effective Communication in Online Work",
              "image": "https://i.ibb.co/MDCLd71B/1714211066359.jpg",
              "excerpt": "Master the skills of clear and concise communication for successful online collaboration.",
              "content": "Effective communication is crucial for online work.  Here are some tips to improve your communication skills... (full content)"
            },
            {
              "id": 9,
              "title": "Setting Realistic Goals for Micro-tasking Success",
              "image": "https://i.ibb.co/kVp4KfNQ/5p-SGXf-Yz-ROG02d3azo6-K-setting-realistic-goals.webp",
              "excerpt": "Achieve your micro-tasking goals by setting SMART objectives and staying motivated.",
              "content": "Setting realistic and achievable goals is essential for success in micro-tasking.  Learn how to set SMART goals... (full content)"
            }
          
    ];

    setBlogs(blogData);
  }, []);

  const handleReadMore = (id) => {
    setExpandedBlog(id);
  };

  const handleClose = () => {
    setExpandedBlog(null);
  };

  return (
    <>
      <Navbar />

      <div className="w-full lg:w-11/12  mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">TaskHive Blogs</h1>

        {blogs.map((blog) => (
          <div key={blog.id} className="mb-8 p-4 border rounded-lg shadow-md">
            <img src={blog.image} alt={blog.title} className="w-auto h-48 object-cover mb-4 rounded-md" /> {/* Added image */}
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600 mt-2">{blog.excerpt}</p>
            {expandedBlog === blog.id ? (
              <div>
                <p className="text-gray-600 mt-2">{blog.content}</p>
                <button onClick={handleClose} className="text-blue-500 mt-2">Close</button>
              </div>
            ) : (
              <button onClick={() => handleReadMore(blog.id)} className="text-blue-500 mt-2">Read More →</button>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Blog;