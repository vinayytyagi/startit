import React from "react";
import {
  FaRegBookmark,
  FaShareAlt,
  FaRegHeart,
  FaUserCircle,
} from "react-icons/fa";

// Sample Data
const blogs = [
  {
    id: 1,
    title: "WelBe: The Future of Wellness Platforms",
    description:
      "WelBe is an all-in-one wellness platform that helps users track their health, set goals, and stay motivated with AI-powered insights.",
    imgSrc:
      "https://www.rawstory.com/media-library/file-photo-spacex-ceo-elon-musk-speaks-during-a-rally-on-the-inauguration-day-of-u-s-president-donald-trump-s-second-president.jpg?id=56212471&width=1200&height=810", // Replace with actual images
    category: "Marketing",
    author: "Neeraj Gupta",
    date: "Dec 19, 2024",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "GroLevel: The Smart Way to Track & Save Money",
    description:
      "A finance tracking app that helps users manage their expenses, track savings, and optimize their financial future.",
    imgSrc: "https://assets.angelpub.com/2015/35/33004/musk-wave.jpg",
    category: "Finance",
    author: "Neeraj Gupta",
    date: "Dec 18, 2024",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Pre-order App: Eliminating Restaurant Wait Times",
    description:
      "This app allows customers to pre-order their meals, reducing wait times and improving restaurant efficiency.",
    imgSrc:
      "https://media.marketrealist.com/brand-img/9T5rVQlNc/0x0/elon-musk-first-wife-1643063212417.jpg",
    category: "FoodTech",
    author: "Neeraj Gupta",
    date: "Dec 17, 2024",
    readTime: "5 min read",
  },
];

const BlogShowcase = () => {
  return (
    <div className="">
      {/* Header Section */}
        <h1 className="text-xl text-center font-bold text-gray-900">
          Blogs
        </h1>
      <div className="flex justify-end mb-4">
        <button className="bg-white text-gray-800 cursor-pointer font-bold py-1 px-6 rounded-lg shadow-md border border-gray-300 hover:bg-gray-50">
          All
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
          >
            {/* Image Section with Icons */}
            <div className="relative">
              <img
                src={blog.imgSrc}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              {/* Icons Overlay */}
              <div className="absolute top-2 right-2 flex space-x-4 bg-black/50 p-1 rounded-full">
                <FaRegHeart className="text-white text-2xl cursor-pointer hover:text-red-400" />
                <FaRegBookmark className="text-white text-2xl cursor-pointer hover:text-blue-400" />
                <FaShareAlt className="text-white text-2xl cursor-pointer hover:text-green-400" />
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-2">
                {blog.description}
              </p>

              {/* Author & Meta Info */}
              <div className="flex items-center mt-4 space-x-3">
                {/* User Icon */}
                <FaUserCircle className="text-gray-500 text-3xl" />

                <div className="flex flex-col">
                  <span className="text-[#27ae60] font-medium">
                    {blog.author}
                  </span>

                  {/* Date, Read Time, and Category */}
                  <div className="flex flex-wrap items-center text-xs text-gray-500 space-x-1">
                    <span>{blog.date}</span>
                    <span className="pb-1.5">.</span>
                    <span>{blog.readTime}</span>
                    <span className="bg-blue-100 text-[#08415c] px-2 py-0.5 ml-5 rounded-md">
                      {blog.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogShowcase;
