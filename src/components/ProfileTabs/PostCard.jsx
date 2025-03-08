import { useState } from "react";
import { FaHeart, FaRegCommentDots, FaShareAlt } from "react-icons/fa";

const PostData = [
  {
    name: "Sujata",
    experience: "I have experience as a product manager",
    post: "It is an innovative AR-based social media app that enables users to create, share, and discover augmented reality experiences. By leveraging cutting-edge AR technology, EchoPlex provides a unique and immersive way for users to interact with each other and their surroundings.",
    keyFeatures: [
      "AR Camera: Users can capture and share AR-enhanced photos and videos.",
      "AR Filters: Users can apply a variety of AR filters to their photos and videos.",
      "AR Games: Users can play interactive AR games with friends and family.",
      "AR Social Network: Users can connect and interact with others in a virtual AR space.",
      "AR Workshops: Users can attend virtual AR workshops and learn new skills.",
    ],
  },
];

const PostCard = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Post</h2>
      {PostData.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow flex items-start space-x-4 mb-4">
          <img
            src="https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-1024.png"
            alt="Profile"
            className="w-14 h-14 rounded-full border-2 border-blue-500"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.experience}</p>
            <p className="text-gray-700 mt-2 text-sm">
              {expanded ? item.post : `${item.post.substring(0, 120)}...`}
            </p>
            <p className="text-gray-700 mt-1 text-sm">
              <strong>Key Features:</strong>
              <br />
              {item.keyFeatures.map((feature, idx) => (
                <span key={idx} className="block">{`${idx + 1}. ${feature}`}</span>
              ))}
            </p>
            <p
              className="text-green-600 font-semibold text-sm cursor-pointer mt-1"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show less" : "...show more"}
            </p>
            <div className="flex justify-between items-center mt-3">
              <div className="flex space-x-4 text-gray-600">
                <FaHeart className="cursor-pointer" />
                <FaRegCommentDots className="cursor-pointer" />
                <FaShareAlt className="cursor-pointer" />
              </div>
              <p className="text-gray-500 text-sm">2 Replay . 10 Likes</p>
            </div>
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
            <img
              src="https://via.placeholder.com/40"
              alt="Company Logo"
              className="w-10 h-10"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
