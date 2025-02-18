import React from "react";

function StartupServices() {
  const services = [
    {
      title: "Idea Validation",
      description:
        "Receive expert insights to refine, validate, and shape your startup idea into a market-ready concept that resonates with your audience.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      size: "col-span-2", // Wide card
    },
    {
      title: "Business Classes",
      description:
        "Master entrepreneurship, market analysis, funding, and more with immersive, expert-led sessions.",
      img: "https://cdn-icons-png.flaticon.com/512/3048/3048122.png",
      size: "row-span-2", // Tall card
    },
    {
      title: "Proof of Concept (POC)",
      description:
        "Develop a strong proof of concept to demonstrate your idea’s viability and attract investor interest.",
      img: "https://cdn-icons-png.flaticon.com/512/3199/3199879.png",
      size: "col-span-1",
    },
    {
      title: "Investor Connects",
      description:
        "Gain access to a curated network of venture capitalists and investors. Present ideas confidently and secure funding.",
      img: "https://cdn-icons-png.flaticon.com/512/3068/3068770.png",
      size: "col-span-2", // Wide card
    },
    {
      title: "Funding Assistance",
      description:
        "Unlock funding opportunities with tailored support for government schemes and private investment programs.",
      img: "https://cdn-icons-png.flaticon.com/512/6191/6191525.png",
      size: "row-span-2", // Tall card
    },
    {
      title: "Government Compliances",
      description:
        "Navigate legal and regulatory requirements effortlessly with expert guidance.",
      img: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
      size: "col-span-1",
    },
    {
      title: "Company Registration",
      description:
        "Simplify the startup process with expert assistance in registering your business and legal entity.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135691.png",
      size: "col-span-1",
    },
    {
      title: "Startup Branding",
      description:
        "Establish a powerful brand identity with professional designs, including logos, websites, and marketing assets.",
      img: "https://cdn-icons-png.flaticon.com/512/3044/3044415.png",
      size: "col-span-2", // Wide card
    },
    {
      title: "Market Analysis",
      description:
        "Leverage research on trends, competitors, and audiences to uncover growth opportunities and refine strategies.",
      img: "https://cdn-icons-png.flaticon.com/512/3258/3258100.png",
      size: "col-span-1",
    },
    {
      title: "Customized Business Plans",
      description:
        "Develop investor-ready business plans tailored to align with your vision and secure funding.",
      img: "https://cdn-icons-png.flaticon.com/512/3021/3021072.png",
      size: "col-span-1",
    },
  ];

  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-900 text-center">
        Unlock Your Startup's Potential!
      </h1>
      <p className="text-center text-gray-600 mt-2 max-w-3xl mx-auto">
        <span className="text-green-600 font-semibold">Explore</span> premium
        services designed to help your startup succeed—access expert guidance,
        funding opportunities, branding, and more, all tailored to your
        specific needs!
      </p>

      {/* Grid Layout with Mixed Card Sizes */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-white shadow-md p-5 rounded-lg flex flex-col items-start transform hover:scale-105 transition-all ${service.size}`}
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-16 h-16 mb-3"
            />
            <h2 className="text-xl font-bold text-blue-900">{service.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StartupServices;
