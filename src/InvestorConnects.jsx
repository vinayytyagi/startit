import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InvestorConnects = () => {
  const investors = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
      name: "Sunita Jain",
      type: "Angel Investor",
      details:
        "Intuitive Entrepreneur - Doer - Angel Investor. Featured in Forbes & CNBC. ISB - Hyd, IIM - K",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      name: "Raj Mehta",
      type: "Venture Capitalist",
      details:
        "Investor in 20+ startups. Passionate about AI and FinTech. Featured in Economic Times.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
      name: "Anita Sharma",
      type: "Private Equity Investor",
      details:
        "Scaling startups to unicorns. Invested in top SaaS companies. Harvard Business School Alumni.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140052.png",
      name: "Kunal Verma",
      type: "Seed Investor",
      details:
        "Helping early-stage startups scale. Featured in Startup India Magazine. Ex-Googler.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
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
    <div className="p-8 bg-blue-50">
      {/* Heading & View All */}
      <h1 className="text-3xl pl-2 font-bold text-blue-900">
        Investor Connects
      </h1>

      <div className="flex items-center justify-between">
        <p className="text-gray-600 mt-2 pl-2">
          Find Your Best Investors & VCs To Scale Your Startup
        </p>
        <button className="text-blue-600 font-medium cursor-pointer flex items-center">
          View All <span className="ml-1">↗️</span>
        </button>
      </div>

      {/* Investor Slider */}
      <div className="mt-6">
        <Slider {...settings}>
          {investors.map((investor, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                <img
                  src={investor.img}
                  alt={investor.name}
                  className="w-20 h-20 rounded-full mx-auto"
                />
                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  {investor.name}
                </h3>
                <p className="text-blue-600 font-medium">{investor.type}</p>

                {/* Truncate Details */}
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {investor.details}
                </p>

                <button className="mt-4 bg-green-500 text-white px-4 py-2 cursor-pointer rounded-full text-sm">
                  Let's Connect
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default InvestorConnects;