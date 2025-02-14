import React, { useState } from "react";

const FindCoFounder = () => {
  // Sample profile data
  const [profiles, setProfiles] = useState([
    {
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
      name: "A. K. Roy",
      role: "Ex-Google @Software Engineer",
      social: [
        {
          img: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
          link: "https://linkedin.com",
        },
        {
          img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          link: "https://github.com",
        },
        {
          img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
          link: "https://youtube.com",
        },
      ],
      experience: "2 Years",
      domain: "Technology",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
      name: "Sarah Lee",
      role: "Founder @EdTech Startup",
      social: [
        {
          img: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
          link: "https://linkedin.com",
        },
        {
          img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          link: "https://github.com",
        },
      ],
      experience: "5 Years",
      domain: "Education",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      name: "John Doe",
      role: "CTO @HealthTech",
      social: [
        {
          img: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
          link: "https://linkedin.com",
        },
      ],
      experience: "7 Years",
      domain: "Health",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140052.png",
      name: "Emily Watson",
      role: "AI Researcher @TechLab",
      social: [
        {
          img: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
          link: "https://linkedin.com",
        },
        {
          img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
          link: "https://youtube.com",
        },
      ],
      experience: "10+ Years",
      domain: "Artificial Intelligence",
    },
  ]);

  // State for managing selected domain and experience
  const [selectedDomain, setSelectedDomain] = useState("Domain");
  const [selectedExperience, setSelectedExperience] = useState("Experience");

  return (
    <div className="p-6 bg-blue-50 lg:px-12">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-center text-blue-900">
        Find Co-Founder
      </h1>

      {/* Main Content */}
      <div className="mt-6 flex flex-col md:flex-row items-start justify-between gap-6">
        {/* Left Side - Search Section */}
        <div className="flex-1">
          <h2 className="text-4xl font-semibold text-gray-800">
            Find Your Perfect <span className="text-green-600">Co-Founder</span>{" "}
            !!
          </h2>
          <p className="text-gray-600 mt-2">
            Building a successful startup begins with the right team. Our
            platform connects you with like-minded individuals who share your
            vision and bring complementary skills to the table.
          </p>

          {/* Search Bar */}
          <div className="mt-4 flex items-center border rounded-full p-2 shadow-sm bg-white">
            <input
              type="text"
              placeholder="Enter Expertise, Industry, Experience, etc."
              className="flex-1 outline-none px-3 text-gray-700"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-full cursor-pointer">
              🔍 Search
            </button>
          </div>

          {/* Filters */}
          <div className="mt-4 flex items-center justify-center gap-4">
            {/* Domain Dropdown */}
            <select
              className="p-2 border-2 border-gray-200 rounded-md bg-white shadow cursor-pointer"
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
            >
              <option>Domain</option>
              <option>Health</option>
              <option>Education</option>
              <option>Entertainment</option>
              <option>Technology</option>
              <option>Others</option>
            </select>

            {/* Experience Dropdown */}
            <select
              className="p-2 border-2 border-gray-200 rounded-md bg-white shadow cursor-pointer"
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
            >
              <option>Experience</option>
              <option> {"<1 year"}</option>
              <option>1-2 Years</option>
              <option>3-5 Years</option>
              <option>7-10 Years</option>
              <option>10+ Years</option>
            </select>
          </div>
        </div>

        {/* Right Side - Profile Cards */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {profiles.map((profile, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-4">
                <img
                  src={profile.img}
                  alt={profile.name}
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-gray-600">{profile.role}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex mt-2 space-x-2">
                {profile.social.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={social.img} alt="social" className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Experience & Domain */}
              <p className="text-sm text-gray-700 mt-2">
                Experience: {profile.experience}
              </p>
              <p className="text-sm text-gray-700">Domain: {profile.domain}</p>

              {/* Buttons */}
              <div className="mt-3 flex space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  Follow
                </button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  Message
                </button>
              </div>
            </div>
          ))}

          {/* View All Button */}
          <div className="col-span-2 flex justify-center">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full text-sm">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCoFounder;
