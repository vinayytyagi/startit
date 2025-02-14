import React from "react";
import showcase from "./assets/showcase.png";
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
    <div className="p-6 bg-blue-50 pb-10">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center text-blue-900">
        Startup Showcase
      </h1>

      {/* Main Content */}
      <div className="mt-2 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Trophy Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={showcase}
            alt="Trophy"
            className="w-80 h-auto"
          />
        </div>

        {/* Middle: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-2xl text-gray-700 text-center">
            Submit Your{" "}
            <span className="text-green-600 font-semibold">Idea</span> or{" "}
            <span className="text-green-600 font-semibold">Startup</span>.
            <br />
            Increase your{" "}
            <span className="text-green-600 font-semibold">Likes</span> and
            attract{" "}
            <span className="font-semibold">More Investors</span>.
            <br />
            Get an opportunity to{" "}
            <span className="font-semibold">Secure Funding</span>.
          </p>
        </div>

        {/* Right: Startup Cards Section */}
        <div className="flex-1 bg-white p-4">
          {/* View All Button */}
          <div className="flex justify-end mb-2">
            <a
              href="#"
              className="text-blue-600 font-semibold flex items-center"
            >
              View All <span className="ml-1">↗</span>
            </a>
          </div>

          {/* Startup Cards */}
          <div className="space-y-4">
            {startups.map((startup) => (
              <div
                key={startup.id}
                className="flex items-center justify-between p-6 bg-gray-100 rounded-xl shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={startup.imgSrc}
                    alt={startup.name}
                    className="w-12 h-12 rounded-lg"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-900">
                      {startup.name}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {startup.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-3xl">
                  {startup.rank}{" "}
                  <span className="ml-1 text-2xl font-bold">
                    {startup.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupShowcase;
