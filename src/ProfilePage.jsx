import { useState, useRef } from "react";
import { Edit2, Calendar } from "lucide-react";
import Header from "./Header";

// portfolio images
import Website from "./assets/Website.png";
import Figma from "./assets/Figma.png";
import YouTube from "./assets/YouTube.png";
import GitHub from "./assets/GitHub.png";
import Dribbble from "./assets/Dribbble.png";
import Behance from "./assets/Behance.png";
import Notion from "./assets/Notion.png";
import Medium from "./assets/Medium.png";

// My Round images
import Mahakumbh from "./assets/Mahakumbh.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Post Card
import PostCard from "./components/ProfileTabs/PostCard";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  // States for editable fields
  const [name, setName] = useState("Sujata Rani");
  const [tagline, setTagline] = useState("Enter Your Tagline");
  const [location, setLocation] = useState("Enter Your Location");
  const [bio, setBio] = useState("Enter Your Bio");
  const [expandedSections, setExpandedSections] = useState({
    summary: false,
    experience: false,
    education: false,
  });

  const toggleExpansion = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Track which field is being edited
  const [editField, setEditField] = useState(null);

  // References to auto-focus input fields
  const nameRef = useRef(null);
  const taglineRef = useRef(null);
  const locationRef = useRef(null);
  const bioRef = useRef(null);

  // Function to handle edit icon click
  const handleEdit = (field) => {
    setEditField(field);
    setTimeout(() => {
      if (field === "name") nameRef.current?.focus();
      if (field === "tagline") taglineRef.current?.focus();
      if (field === "location") locationRef.current?.focus();
      if (field === "bio") bioRef.current?.focus();
    }, 100);
  };

  // Set user's role in backend part
  const userRole = "Founder"; // Yeh authentication system se aayega

  const roleTabs = {
    Founder: [
      "About",
      "Portfolio",
      "My Round",
      "Post",
      "Idea Validation",
      "Startup Showcase",
      "Blogs",
    ],
    Investor: ["About", "Portfolio", "Post", "Blogs", "Terms & Conditions"],
    University: ["About", "Portfolio", "Post", "Blogs", "Privacy Policy"],
  };

  const tabs = roleTabs[userRole] || []; // Get tabs based on the role

  const aboutData = [
    {
      title: "Summary",
      content:
        "I hope this message finds you well. My name is Rohan Kapoor, and I manage a digital marketing company. I am reaching out to express my interest in acquiring PDFEdit.pro, a platform I admire for its simplicity and functionality in PDF editing and manipulation.",
    },
    {
      title: "Education",
      content:
        "I have done my BTech and currently persuing my MTech in Computer Science and Engineering. I am reaching out to express my interest in acquiring PDFEdit.pro. The platform has provided many opportunities for the company to expand into different verticals and improve operational efficiency.",
    },
    {
      title: "Experience",
      content:
        "With over 10 years of experience in various sectors of digital marketing and project management, I have managed high-performing teams to optimize digital strategies across multiple platforms. The main focus has been in the areas of SEO, paid campaigns, and strategic partnerships.",
    },
  ];

  const portfolioData = [
    {
      title: "Custom",
      icon: Website,
      link: "https://www.pdfedit.pro",
    },
    {
      title: "Figma",
      icon: Figma,
      link: "https://www.pdfedit.pro",
    },
    {
      title: "Youtube",
      icon: YouTube,
      link: "https://www.pdfedit.pro",
    },
    {
      title: "Github",
      icon: GitHub,
      link: "https://www.pdfedit.pro",
    },
    {
      title: "Dribble",
      icon: Dribbble,
      link: "https://www.pdfedit.pro",
    },
    {
      title: "Behance",
      icon: Behance,
      link: "https://www.pdfedit.pro",
    },
    {
      title: "Notion",
      icon: Notion,
      link: "https://www.pdfedit.pro",
    },
    {
      title: "Medium",
      icon: Medium,
      link: "https://www.pdfedit.pro",
    },
  ];

  const events = [
      {
        image: Mahakumbh,
        title: "Startup Mahakumbh 2025",
        description:
          "The Department for Promotion of Industry and Internal Trade",
      },
      {
        image: Mahakumbh,
        title: "Startup Mahakumbh 2025",
        description:
          "The Department for Promotion of Industry and Internal Trade",
      },
      {
        image: Mahakumbh,
        title: "Startup Mahakumbh 2025",
        description:
          "The Department for Promotion of Industry and Internal Trade",
      },
      {
        image: Mahakumbh,
        title: "Startup Mahakumbh 2025",
        description:
          "The Department for Promotion of Industry and Internal Trade",
      },
    ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2, // Adjusted for spacing between cards
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false, // Removed side arrows
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  

  return (
    <div className="min-h-screen bg-[#edf3fc] pb-10">
      <Header />
      {/* Profile Card */}
      <div className="max-w-xl mx-auto mt-8 bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-6">
          {/* Profile Image */}
          <img
            src="https://img.freepik.com/premium-photo/passport-photo-portrait-asian-smiling-woman_264197-7651.jpg"
            alt="Profile"
            className="rounded-full w-24 h-24 md:w-28 md:h-28 border"
          />

          {/* Profile Details */}
          <div className="flex-1 w-full mt-4 md:mt-0">
            {/* Name Section */}
            <div className="flex items-center space-x-2">
              {editField === "name" ? (
                <input
                  ref={nameRef}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setEditField(null)}
                  className="border-b border-gray-400 outline-none px-2"
                />
              ) : (
                <span className="text-lg font-bold text-blue-900">{name}</span>
              )}
              <Edit2
                className="w-4 h-4 text-green-600 cursor-pointer"
                onClick={() => handleEdit("name")}
              />
            </div>

            {/* Tagline Section */}
            <div className="flex items-center mt-2">
              <span className="text-gray-700 font-medium w-24">Tagline:</span>
              {editField === "tagline" ? (
                <input
                  ref={taglineRef}
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  onBlur={() => setEditField(null)}
                  className="border-b border-gray-400 outline-none flex-1 px-2"
                />
              ) : (
                <span className="border-b border-gray-400 flex-1">
                  {tagline}
                </span>
              )}
              <Edit2
                className="w-4 h-4 text-green-600 cursor-pointer ml-2"
                onClick={() => handleEdit("tagline")}
              />
            </div>

            {/* Location Section */}
            <div className="flex items-center mt-2">
              <span className="text-gray-700 font-medium w-24">Location:</span>
              {editField === "location" ? (
                <input
                  ref={locationRef}
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onBlur={() => setEditField(null)}
                  className="border-b border-gray-400 outline-none flex-1 px-2"
                />
              ) : (
                <span className="border-b border-gray-400 flex-1">
                  {location}
                </span>
              )}
              <Edit2
                className="w-4 h-4 text-green-600 cursor-pointer ml-2"
                onClick={() => handleEdit("location")}
              />
            </div>

            {/* Social Media Icons & Joined Date */}
            <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 mt-4">
              <div className="flex space-x-3">
                {["LinkedIn", "Facebook", "Instagram", "X"].map(
                  (platform, index) => (
                    <img
                      key={index}
                      src={`https://upload.wikimedia.org/wikipedia/commons/${
                        platform === "X"
                          ? "5/53/X_logo_2023_original.svg"
                          : platform === "Instagram"
                          ? "a/a5/Instagram_icon.png"
                          : platform === "Facebook"
                          ? "1/1b/Facebook_icon.svg"
                          : "c/ca/LinkedIn_logo_initials.png"
                      }`}
                      alt={platform}
                      className="w-6 h-6 cursor-pointer"
                    />
                  )
                )}
              </div>

              {/* Joined Date */}
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-gray-600" />
                <span className="ml-2 text-gray-700 font-medium">
                  Joined Feb 2024
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-4">
          <div className="flex items-center">
            <span className="text-gray-700 font-medium w-24">Bio:</span>
            {editField === "bio" ? (
              <input
                ref={bioRef}
                type="text"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                onBlur={() => setEditField(null)}
                className="border-b border-gray-400 outline-none flex-1 px-2"
              />
            ) : (
              <span className="border-b border-gray-400 flex-1">{bio}</span>
            )}
            <Edit2
              className="w-4 h-4 text-green-600 cursor-pointer ml-2"
              onClick={() => handleEdit("bio")}
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full mx-auto bg-white mt-6">
        <div
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="flex items-center lg:justify-center flex-nowrap overflow-x-auto overflow-y-hidden scrollbar-h space-x-4 md:space-x-10 px-6"
        >
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`cursor-pointer text-nowrap p-3 transition-all ${
                activeTab === index
                  ? "font-bold text-xl text-[#27ae60] border-b-4 border-[#27ae60]"
                  : "font-bold text-xl text-[#08415c]"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      {/* Content for Active Tab */}
      <div className="max-w-5xl mx-auto mt-6 bg-white shadow-md rounded-lg p-6">
        {activeTab === 0 && (
          <div className="space-y-4">
            {aboutData.map((item, index) => {
              // Check if the section is expanded or not
              const isExpanded = expandedSections[item.title.toLowerCase()];
              const truncatedContent = item.content.slice(0, 262) + "..."; // Truncate after 250 characters

              return (
                <div key={index} className="border-b last:border-none pb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <Edit2 className="w-5 h-5 text-gray-500 cursor-pointer" />
                  </div>
                  <p className="text-gray-600 mt-2 ml-4">
                    {isExpanded ? item.content : truncatedContent}
                  </p>

                  {/* Show More/Show Less toggle directly after the content */}
                  <a
                    href="#"
                    className="text-green-600 ml-4 font-medium text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleExpansion(item.title.toLowerCase());
                    }}
                  >
                    {isExpanded ? "Show Less" : ". . . Show More"}
                  </a>
                </div>
              );
            })}
          </div>
        )}

        {/* {activeTab !== 0 && <div>{tabs[activeTab]}</div>} */}

        {/* TabPortfolio */}
        {/* TabPortfolio */}
        {activeTab == 1 && (
          <div>
            <div className="text-center text-2xl font-semibold text-[#08415c]">
              Connect your other{" "}
              <span className="text-[#27ae60]">Work Profile</span> showcase your
              <span className="text-[#ff6f00]"> work</span>
            </div>
            <div className="pt-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {portfolioData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center border rounded-lg cursor-pointer p-4"
                      onClick={() => window.open(item.link, "_blank")}
                    >
                      <img src={item.icon} className="w-12" />
                      <h3 className="text-sm text-center font-medium">
                        {item.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {/* TabPortfolio */}
        {activeTab == 2 && <div>
          <Slider {...settings}>
            {events.map(({ image, title, description }, index) => (
              <div key={index} className="px-3">
                <div className="bg-white border rounded-xl p-2 text-center flex">
                  <img
                    src={image}
                    alt={title}
                    className="w-20 h-auto rounded-lg"
                  />
                  <div>
                    <h3 className="mt-3 text-lg font-semibold text-gray-900">
                      {title}
                    </h3>
                    <p className="text-gray-600">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
       
          
          </div>}
        {/* TabPortfolio */}
        {activeTab == 3 && <div>
          
          <PostCard />
          </div>}
        {/* TabPortfolio */}
        {activeTab == 4 && <div>{tabs[activeTab]}</div>}
        {/* TabPortfolio */}
        {activeTab == 5 && <div>{tabs[activeTab]}</div>}
        {/* TabPortfolio */}
        {activeTab == 6 && <div>{tabs[activeTab]}</div>}
      </div>
    </div>
  );
};

export default ProfilePage;
