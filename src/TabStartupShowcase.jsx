import React from "react";
import showcase1 from "./assets/showcase_card1.png";
import showcase2 from "./assets/showcase_card2.png";
import showcase3 from "./assets/showcase_card3.png";

const startups = [
  {
    id: 1,
    name: "WelBe",
    description: "All-in-one wellness platform!",
    imgSrc: showcase1,
    rank: "🥇",
    score: 47,
  },
  {
    id: 2,
    name: "GroLevel",
    description: "Track. Save. Thrive.",
    imgSrc: showcase2,
    rank: "🥈",
    score: 42,
  },
  {
    id: 3,
    name: "Pre-order App",
    description: "Food ordering app to avoid ...",
    imgSrc: showcase3,
    rank: "🥉",
    score: 40,
  },
];

const StartupShowcase = () => {
  return (
    <div className="bg-blue-50 py-8 px-4">
      {/* Header Section */}
      <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">
        Startup Showcase
      </h1>

      {/* Startup Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {startups.map((startup) => (
          <div
            key={startup.id}
            className="flex items-center justify-between p-5 bg-white rounded-lg shadow-lg"
          >
            {/* Image & Details */}
            <div className="flex items-center gap-4">
              <img
                src={startup.imgSrc}
                alt={startup.name}
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {startup.name}
                </h2>
                <p className="text-sm text-gray-600">{startup.description}</p>
              </div>
            </div>

            {/* Rank & Score */}
            <div className="flex items-center text-3xl font-bold">
              {startup.rank}{" "}
              <span className="ml-2 text-xl text-gray-800">{startup.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartupShowcase;
