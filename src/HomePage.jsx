import React, { useState } from "react";
import {
  Lightbulb,
  Trophy,
  Newspaper,
  UserCheck,
  Users,
  DollarSign,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/Card";

const features = [
  {
    title: "Idea Validation",
    description: "Validate Your Idea with Founders, Mentors, Investors, & VCs.",
    icon: Lightbulb,
  },
  {
    title: "Competition",
    description: "Join Hackathons, Ideathons, Expos, & Pitching Events.",
    icon: Trophy,
  },
  {
    title: "Startups News",
    description: "Get news about Startup Growth, IPOs, Funding, & Layoffs.",
    icon: Newspaper,
  },
  {
    title: "Mentorship",
    description: "Empowering Startups with Expert Guidance and Resources.",
    icon: UserCheck,
  },
  {
    title: "Investor Connect",
    description: "Pitch Your Idea Directly to Investors & VCs.",
    icon: Users,
  },
  {
    title: "Find Co-Founder",
    description: "Find best co-founder for your startup.",
    icon: Users,
  },
  {
    title: "Funding Events",
    description: "Apply for Government Startup Funds & Grants.",
    icon: DollarSign,
  },
  {
    title: "More",
    description: "More features coming soon!",
    icon: Users,
  },
];

const HomePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className="bg-gray-50">
      <header>
        <div className="bg-slate-300 flex justify-between text-white py-3 px-6">
          <img
            className="h-10"
            src="https://aperobotics.files.wordpress.com/2014/11/startit-logo-raster.png"
            alt="logo"
          />
          <div className="flex items-center gap-4">
            {/* Hamburger menu for mobile */}
            <button className="lg:hidden text-white" onClick={toggleNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Navigation links */}
            <nav
              className={`flex items-center gap-4 text-[#08415C] ${
                isNavOpen
                  ? "flex-col absolute top-16 left-0 right-0 bg-slate-300 py-6 px-4 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:static"
                  : "hidden lg:flex"
              }`}
            >
              {[
                "Idea Validation",
                "Competition",
                "Events",
                "News",
                "Premium",
                "Investors",
                "More",
              ].map((link, idx) => (
                <React.Fragment key={idx}>
                  <a href="/" className="hover:text-green-500">
                    {link}
                  </a>
                </React.Fragment>
              ))}
            </nav>

            <img
              className="h-10 mx-10 rounded-full"
              src="https://www.pngrepo.com/png/384670/512/account-avatar-profile-user.png"
              alt="profile-avatar"
            />
          </div>
        </div>
      </header>

      <section className="text-center mt-16 px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Empower Your{" "}
          <span
            className="text-green-500"
            style={{ fontFamily: "cursive", fontWeight: 500 }}
          >
            Startup Vision
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Unleash the power of your entrepreneurial spirit!
        </p>
        <p className="text-2xl italic text-gray-700 mb-8">
          "Ideate. Build. Grow."
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex-col items-center gap-2">
              <feature.icon className="text-green-500 w-12 h-12" />
              <CardTitle className="text-black">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
      {/* Horizontal Scrolling Section */}
      <section className="my-10">
        <div className="overflow-hidden relative bg-slate-300 py-6">
          <div className="flex">
            {/* First set of logos (images) with faster animation */}
            <span className="flex animate-scroll-fast gap-10">
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
            transform: translateX(135%);
          }
          100% {
            transform: translateX(
              -100%
            ); 
          }
        }

        .animate-scroll-fast {
          animation: scroll-fast 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
