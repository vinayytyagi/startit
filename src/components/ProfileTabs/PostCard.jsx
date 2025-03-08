import { useState } from "react";
import { FaHeart, FaRegCommentDots, FaShareAlt } from "react-icons/fa";

const PostData = [
  {
    name: "Sujata",
    image: "https://cdn-icons-png.flaticon.com/512/146/146005.png",
    experience: "I have experience as a product manager",
    post: "It is an innovative AR-based social media app that enables users to create, share, and discover augmented reality experiences. By leveraging cutting-edge AR technology, EchoPlex provides a unique and immersive way for users to interact with each other and their surroundings.",
    keyFeatures: [
      "AR Camera: Users can capture and share AR-enhanced photos and videos.",
      "AR Filters: Users can apply a variety of AR filters to their photos and videos.",
      "AR Games: Users can play interactive AR games with friends and family.",
      "AR Social Network: Users can connect and interact with others in a virtual AR space.",
      "AR Workshops: Users can attend virtual AR workshops and learn new skills.",
      "AR Tours: Users can explore virtual AR tours and learn about the app's features.",
      "AR Events: Users can attend virtual AR events and learn about the app's features."
    ],
  },
  {
    name: "Amit",
    image:
      "https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-1024.png",
    experience: "I have experience in AI development",
    post: "AI-powered social networking app that enables users to create and explore AI-generated content, interact with AI-driven profiles, and engage in smart conversations.",
    keyFeatures: [
      "AI Chatbots: Smart AI-based conversations.",
      "AI Image Generation: Create unique AI images.",
      "AI Content Suggestion: Get personalized content feeds.",
      "AI Profile Matching: Find like-minded connections.",
      "AI Content Moderation: Automated content moderation.",
      "AI Content Creation: Create AI-generated content.",
      "AI Content Filtering: Filter AI-generated content.",
      "AI Content Analysis: Analyze AI-generated content.",
    ],
  },
];

const MAX_LINES = 8; // Show only 5 lines initially

const PostCard = () => {
  const [expanded, setExpanded] = useState(Array(PostData.length).fill(false));

  const toggleExpand = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <div className="">
      <h2 className="text-xl font-semibold text-center mb-4">
        Posts
      </h2>
      {PostData.map((item, index) => {
        const textLines = [
          item.post,
          ...(item.keyFeatures.length > 0 ? ["Key Features:"] : []), // Add "Key Features:" conditionally
          ...item.keyFeatures.map((feature, idx) => `${idx + 1}. ${feature}`),
        ];

        const showMore = textLines.length > MAX_LINES;
        const visibleLines = expanded[index]
          ? textLines
          : textLines.slice(0, MAX_LINES);

        return (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-md mb-4 flex flex-col md:flex-row items-start md:items-center"
          >
            {/* Profile Image & Name Section */}
            <div className="flex flex-col items-center md:items-start w-full md:w-1/5">
              <img
                src={item.image}
                alt="Profile"
                className="w-14 h-14 rounded-full border-2 border-black"
              />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.experience}</p>

              {/* Actions Section (Below Name in Laptop, Below Content in Mobile) */}
              <div className="flex space-x-4 text-gray-600 text-xl mt-3 md:mt-5">
                <FaHeart className="cursor-pointer hover:text-red-500" />
                <FaRegCommentDots className="cursor-pointer hover:text-blue-500" />
                <FaShareAlt className="cursor-pointer hover:text-green-500" />
              </div>
              <p className="text-gray-500 text-xs mt-1">2 Replies · 10 Likes</p>
            </div>

            {/* Content Section */}
            <div className="mt-3 md:mt-0 md:ml-4 w-full">
              <div className="text-gray-700 text-sm">
                {visibleLines.map((line, idx) => (
                  <p key={idx} className="leading-snug">
                    {line === "Key Features:" ? <strong>{line}</strong> : line}
                  </p>
                ))}

                {/* Show More / Show Less Button */}
                {showMore && (
                  <p
                    className="text-green-600 font-semibold text-sm cursor-pointer mt-1"
                    onClick={() => toggleExpand(index)}
                  >
                    {expanded[index] ? "Show less" : "...show more"}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostCard;
