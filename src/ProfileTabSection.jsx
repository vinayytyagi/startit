import react from "react";
import { useState, useEffect, useRef } from "react";
import { Edit2, Trash2 } from "lucide-react";
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
// startup showcase
import TabStartupShowcase from "./TabStartupShowcase";
// blogs
import TabBlogs from "./TabBlogs";

function ProfileTabSection() {
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

  // Set user's role in backend part
  const userRole = "Founder"; // Yeh authentication system se aayega
  const tabs = roleTabs[userRole] || []; // Get tabs based on the role

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

  // Slider
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

  const [activeTab, setActiveTab] = useState(0);

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

  // Initial state for the sections
  const [aboutData, setAboutData] = useState([
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
  ]);

  // State for modal visibility and content
  const [modalVisible, setModalVisible] = useState(false);
  const [updatedSummary, setUpdatedSummary] = useState(aboutData[0].content);
  const [updatedExperience, setUpdatedExperience] = useState(
    aboutData[1].content
  );
  const [updatedEducation, setUpdatedEducation] = useState(
    aboutData[2].content
  );

  const openModal = () => {
    // Set the initial content in the modal
    setUpdatedSummary(aboutData[0].content);
    setUpdatedExperience(aboutData[1].content);
    setUpdatedEducation(aboutData[2].content);
    setModalVisible(true);
  };

  const handleSave = () => {
    // Update the aboutData with the new content from the modal
    setAboutData([
      { title: "Summary", content: updatedSummary },
      { title: "Experience", content: updatedExperience },
      { title: "Education", content: updatedEducation },
    ]);
    setModalVisible(false); // Close the modal after saving
  };

  const handleCancel = () => {
    setModalVisible(false); // Close the modal without saving
  };

  // Disable scrolling on the body when the modal is open
  useEffect(() => {
    if (modalVisible) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    // Cleanup to reset scrolling when the component is unmounted or modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalVisible]);

  return (
    <div>
      <div>
        {/* Modal for Editing */}
        {modalVisible && (
          <div className="fixed inset-0 backdrop-blur-sm backdrop-brightness-75 bg-opacity-50 flex justify-center items-center z-50">
            <div
              className="bg-white p-6 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md shadow-xl overflow-y-auto"
              style={{ maxHeight: "90vh" }}
            > 
              <h3 className="text-xl font-semibold">Edit Sections</h3>
              {/* Summary Section */}
              <div className="mt-4">
                <h4 className="">Summary</h4>
                <textarea
                  value={updatedSummary}
                  onChange={(e) => setUpdatedSummary(e.target.value)}
                  className="w-full mt-2 p-2 border rounded"
                  rows="4"
                />
              </div>

              {/* Experience Section */}
              <div className="mt-4">
                <h4 className="">Experience</h4>
                <textarea
                  value={updatedExperience}
                  onChange={(e) => setUpdatedExperience(e.target.value)}
                  className="w-full mt-2 p-2 border rounded"
                  rows="4"
                />
              </div>

              {/* Education Section */}
              <div className="mt-4">
                <h4 className="">Education</h4>
                <textarea
                  value={updatedEducation}
                  onChange={(e) => setUpdatedEducation(e.target.value)}
                  className="w-full mt-2 p-2 border rounded"
                  rows="4"
                />
              </div>

              {/* Modal Footer */}
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={handleCancel}
                  className="bg-gray-300 text-black px-4 py-2 rounded cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
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
        <div className="flex justify-end">
          <button
            onClick={openModal}
            className="bg-blue-500 text-white px-2 py-1 cursor-pointer rounded-lg"
          >
            Edit Sections
          </button>
        </div>
        {activeTab === 0 && (
          <div className="space-y-4 bg-white">
            {aboutData.map((item, index) => {
              // Check if the section is expanded or not
              const isExpanded = expandedSections[item.title.toLowerCase()];
              const truncatedContent = item.content.slice(0, 262) + "..."; // Truncate after 250 characters

              return (
                <div key={index} className="border-b last:border-none pb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">{item.title}</h3>
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
        {activeTab == 2 && (
          <div>
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
          </div>
        )}
        {/* TabPortfolio */}
        {activeTab == 3 && (
          <div>
            <PostCard />
          </div>
        )}
        {/* TabPortfolio */}
        {activeTab == 4 && (
          <div>
            <PostCard />
          </div>
        )}
        {/* TabPortfolio */}
        {activeTab == 5 && (
          <div>
            <TabStartupShowcase />
          </div>
        )}
        {/* TabPortfolio */}
        {activeTab == 6 && (
          <div>
            <TabBlogs />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileTabSection;
