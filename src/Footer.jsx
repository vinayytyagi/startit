import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mahakumbh from "./assets/Mahakumbh.png";
import Registration from "./assets/Registration.png";
import Heart from "./assets/Heart.png";
import Timemachine from "./assets/Timemachine.png";
import Nextpage from "./assets/Nextpage.png";

const Footer = () => {
  const stats = [
    { number: "32M+", label: "Active Users" },
    { number: "32M+", label: "Active Startups" },
    { number: "32M+", label: "Active Investors" },
    { number: "32M+", label: "Hackathons & Ideathons" },
    { number: "32M+", label: "Incubation" },
    { number: "32M+", label: "Accelerators" },
    { number: "32M+", label: "Funding By Us" },
  ];

  const footerLinks = [
    { name: "Registrations", icon: Registration, active: true },
    { name: "Wishlist", icon: Heart, active: false },
    { name: "Recent", icon: Timemachine, active: false },
    { name: "My Rounds", icon: Nextpage, active: false },
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
    slidesToShow: 3, // Adjusted for spacing between cards
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
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="space-y-8 bg-gray-50">
      <div className="px-40 pt-4">
        <h1 className="text-center text-4xl font-bold mb-8">Our Numbers</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {stats.map(({ number, label }, index) => (
            <div
              key={index}
              className="bg-[#e3e6eb] p-6 rounded-lg text-center shadow-md"
            >
              <p className="text-3xl font-bold text-green-600 mb-4">{number}</p>
              <p className="text-blue-900 text-xl font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#c6e9f9] py-6">
        <div className="flex items-center px-10 mb-6">
          <img
            src="https://aperobotics.files.wordpress.com/2014/11/startit-logo-raster.png"
            alt="Logo"
            className="h-14"
          />
        </div>
        {/* Navigation Buttons */}
        <div className="mx-10 flex items-center bg-white rounded-full p-2 space-x-6 w-fit border border-gray-300">
          {footerLinks.map(({ name, icon, active }) => (
            <button
              key={name}
              className={`flex items-center px-6 py-2 rounded-full transition font-medium text-lg border 
              ${
                active
                  ? "bg-gray-300 border-gray-500"
                  : "border-transparent hover:bg-gray-100"
              }`}
            >
              <img src={icon} alt={name} className="w-6 h-6 mr-2" />
              {name}
            </button>
          ))}
        </div>

        {/* Event Slider */}
        <div className="mt-6 pb-8">
          <div className="flex justify-between items-center mb-4 px-10">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <button className="text-blue-600 font-medium flex items-center cursor-pointer">
              View All <span className="ml-1">↗️</span>
            </button>
          </div>
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
      </div>
    </div>
  );
};

export default Footer;
