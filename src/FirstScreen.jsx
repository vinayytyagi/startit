import React from "react";
import Header from "./Header";
import Startitimg from "./assets/Startitimg.webp";

const features = [
  {
    title: "Idea Validation",
    description: "Validate Your Idea with Founders, Mentors, & Investors.",
    icon: "https://cdni.iconscout.com/illustration/premium/thumb/validate-startup-idea-9721704-7930825.png",
  },
  {
    title: "Competition",
    description: "Join Hackathons, Ideathons, Expos, & Pitching Events.",
    icon: "https://th.bing.com/th/id/OIP.pxD_WgE-xBrwu5zJ_EVepgHaFY?w=266&h=194&c=7&r=0&o=5&dpr=1.1&pid=1.7",
  },
  {
    title: "Startups News",
    description: "Get news about Startup Growth, IPOs, Funding, & Layoffs.",
    icon: "https://cdn-icons-png.flaticon.com/512/9162/9162833.png",
  },
  {
    title: "Mentorship",
    description: "Empowering Startups with Expert Guidance and Resources.",
    icon: "https://icon-library.com/images/mentoring-icon/mentoring-icon-24.jpg",
  },
  {
    title: "Investor Connect",
    description: "Pitch Your Idea Directly to Investors & VCs.",
    icon: "https://th.bing.com/th/id/OIP.iNXAMBNAHwK2n6KCtF9hdAHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.1&pid=1.7",
  },
  {
    title: "Find Co-Founder",
    description: "Find best co-founder for your startup.",
    icon: "data:image/jpeg;base64,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",
  },
  {
    title: "Funding Events",
    description: "Apply for Government Startup Funds & Grants.",
    icon: "https://th.bing.com/th/id/OIP.x-HN-6Bc3nU4B3_HaJo2swHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
  },
  {
    title: "More",
    description: "More features coming soon!",
    icon: "https://th.bing.com/th/id/OIP.K5_Cr63gcrS4uQ5mRArSRAHaFG?w=257&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
  },
];

const FirstScreen = () => {
  return (
    <div className="bg-[#edf3fc]">
      <Header />

      <section className="text-center mt-16 px-4 flex flex-col items-center justify-between">
        {/* <div className=""> */}
          {/* Title */}
          <h1 className="text-5xl font-bold text-[#08415c] mb-4">
            Empower Your{" "}
            <span
              className="text-[#27ae60]"
              style={{ fontFamily: "cursive", fontWeight: 500 }}
            >
              Startup Vision
            </span>
          </h1>

          {/* First line with animated gradient and glow */}
          <p className="text-2xl font-semibold text-gray-600 mb-6 animate-fade-up transition-all duration-700">
            <span className="text-[#27ae60] p-1 rounded-lg">
              Unleash the power of your entrepreneurial spirit!
            </span>
          </p>

          {/* Second line with smoother text and larger text for readability */}
          <p className="text-lg sm:text-xl font-light text-gray-700 mb-6 mx-auto max-w-5xl leading-relaxed tracking-wide transform transition-transform duration-300">
            Validate groundbreaking ideas, discover your ideal co-founder,
            participate in exciting hackathons and ideathons, pitch your vision
            directly to investors, and access exclusive funding opportunities to
            fuel your startup’s growth.
          </p>

          {/* Third line with hover effects and background highlight */}
          <p className="text-3xl italic font-semibold text-gray-700 mb-10 text-center transform hover:text-[#27ae60] transition-all duration-300">
            <span className="inline-block px-4 py-2 rounded-lg shadow-lg text-shadow-lg bg-[#08415c] text-white hover:bg-[#27ae60] hover:scale-105 transition-all duration-700">
              "Ideate. Build. Grow."
            </span>
          </p>
        {/* </div> */}

        {/* <img src={Startitimg} alt="" /> */}

        {/* <img
          src="https://cdni.iconscout.com/illustration/free/thumb/free-business-startup-5622750-4676403.png"
          alt=""
          className="w-150"
        /> */}

        {/* <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/team-working-on-startup-project-5150431-4315659.png"
          alt=""
          className="w-150"
        /> */}
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#e6f5ff] border-2 border-[#cfd9e9] p-6 rounded-tr-4xl rounded-bl-4xl rounded-tl-xl rounded-br-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex justify-center items-center gap-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-18 h-22"
              />
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-black text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-center text-gray-700">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Horizontal Scrolling Section */}
      <section className="mt-10">
        <div className="overflow-hidden flex relative bg-white">
          <div className="bg-gray-200 z-10 px-10 py-6 text-lg text-black font-bold">
            Startup <div className="text-green-500">Grow Us</div>
          </div>
          <div className="flex">
            {/* First set of logos (images) with faster animation */}
            <span className="flex animate-scroll-fast gap-10 pt-8">
              <img
                src="https://vectorseek.com/wp-content/uploads/2023/10/Mamaearth-Logo-Vector.svg-.png"
                alt="MamaEarth"
                className="h-8"
              />
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/png/unstop-logo-500x198.png"
                alt="UnStop"
                className="h-8"
              />
              <img
                src="https://companieslogo.com/img/orig/ZOMATO.NS_BIG-aa3dfaff.png?t=1660019461"
                alt="Zomato"
                className="h-8"
              />
              <img
                src="https://vectorseek.com/wp-content/uploads/2023/10/Mamaearth-Logo-Vector.svg-.png"
                alt="MamaEarth"
                className="h-8"
              />
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/png/unstop-logo-500x198.png"
                alt="UnStop"
                className="h-8"
              />
              <img
                src="https://companieslogo.com/img/orig/ZOMATO.NS_BIG-aa3dfaff.png?t=1660019461"
                alt="Zomato"
                className="h-8"
              />
            </span>
          </div>
        </div>
      </section>

      {/* CSS for horizontal scrolling */}
      <style jsx>{`
        @keyframes scroll-fast {
          0% {
            transform: translateX(125%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-fast {
          animation: scroll-fast 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FirstScreen;
