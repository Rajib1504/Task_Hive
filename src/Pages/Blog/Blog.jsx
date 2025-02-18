import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from "../../Home/Shared/Footer/Footer";
import Navbar from "../../Home/Shared/Navbar/Navbar";
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlog, setExpandedBlog] = useState(null);
  const [swipersContent, setSwipersContent] = useState([]);

  useEffect(() => {
    const blogData = [
      {
        id: 1,
        title: "How to Succeed in Micro-Tasking",
        image: "https://i.ibb.co/GZXP21y/images.png",
        excerpt: "Discover the best strategies to maximize your earnings on TaskHive.",
        content: "Micro-tasking is an excellent way to earn money online..."
      },
      {
        id: 2,
        title: "Top 10 Tasks to Earn Quick Coins",
        image: "https://i.ibb.co/vvMvymmd/Earni-770x433.jpg",
        excerpt: "Looking for quick tasks to boost your balance? Here are the best ones!",
        content: "Some tasks are more profitable than others. Let’s explore the top 10 quick tasks..."
      },
      {
        id: 3,
        title: "Buyer Tips: How to Get Quality Work",
        image: "https://i.ibb.co/LXrfvrpX/quality-lg-cropped.webp",
        excerpt: "Buyers, here’s how you can ensure high-quality work from workers on TaskHive.",
        content: "If you’re a buyer, getting the best results from workers is crucial..."
      }
    ];
    setBlogs(blogData);
  }, []);

  useEffect(() => {
    const swipers = [
      {
        
        image: "https://i.ibb.co/v6VvpqVv/spiral-notepad-with-black-coffee-spectacle-1252-962.jpg"
      },
      {
     
        image: "https://i.ibb.co/dqPKVkY/0ca4fd1b751392e062c6d3e56eb02837.jpg"
      },
      {
        
        image: "https://i.ibb.co/sBX6d6x/laptop-lamp-work-night-top-view-169016-17234.jpg"
      },
      {
      
        image: "https://i.ibb.co/GLPWb6z/write-articles-blogs-creative-writing.webp"
      }
    ];
    setSwipersContent(swipers);
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
      <div className="container w-11/12 mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">TaskHive Blogs</h1>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Swiper Section */}
          <div className=" rounded-lg overflow-hidden">
            <Swiper navigation={true} modules={[Navigation]} className="rounded-lg">
              {swipersContent.map((content, idx) => (
                <SwiperSlide key={idx}>
                  <img src={content.image} alt={content.title} className="w-full  h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Blog List */}
          <div className="space-y-6">
            {blogs.map((blog) => (
              <div key={blog.id} className="flex bg-white p-4 border rounded-lg   transition-all">
                <img src={blog.image} alt={blog.title} className="w-48 h-32 object-cover rounded-md" />
                <div className="ml-4 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">{blog.title}</h2>
                    <p className="text-gray-700 mt-2">{blog.excerpt}</p>
                    {expandedBlog === blog.id ? (
                      <div>
                        <p className="text-gray-600 mt-2">{blog.content}</p>
                        <button onClick={handleClose} className="text-blue-500 mt-2">Close</button>
                      </div>
                    ) : (
                      <button onClick={() => handleReadMore(blog.id)} className="text-blue-500 mt-2">Read More →</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
