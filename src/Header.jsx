import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Registration2 from "./assets/Registration2.png";
import Timemachine2 from "./assets/Timemachine2.png";
import Logout from "./assets/Logout.png";
import Settings from "./assets/Settings.png";
import SlogoBlack from "./assets/s-logo-black.png";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown menu for profile
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Toggle the navigation menu for mobile view
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const navigate = useNavigate(); // Initialize navigate

  const dropdownRef = useRef(null);
  const avatarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        avatarRef.current &&
        !avatarRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="flex justify-between shadow bg-white text-white py-3 px-2">
        <div className="flex items-center gap-4 cursor-pointer" 
          onClick={() => navigate("/")} // Navigate to the home page
        >
          {/* Logo */}
          <img
            className="h-10 ml-8"
            src={SlogoBlack}
            // src="https://aperobotics.files.wordpress.com/2014/11/startit-logo-raster.png"
            alt="logo"
          />
          <div className="text-black text-2xl font-bold">Startit</div>
        </div>
        <div className="flex items-center gap-4">
          {/* Hamburger menu for mobile */}
          <button
            className="lg:hidden text-gray-600 text-4xl" // Show only on small screens
            onClick={toggleNav}
          >
            <GiHamburgerMenu />
          </button>

          {/* Navigation links */}
          <nav
            className={`flex items-center gap-4 text-[#08415C] ${
              isNavOpen
                ? "flex-col absolute top-16 left-0 right-0 bg-[#deecf9] py-6 px-4 space-y-2 lg:flex lg:space-y-0 lg:flex-row lg:static z-10"
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

          {/* Profile Avatar */}
          <img
            className="h-10 mx-10 rounded-full cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/256/2726/2726000.png"
            alt="profile-avatar"
            onClick={toggleDropdown}
            ref={avatarRef}
          />

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              ref={dropdownRef} // <-- Add this ref here
              className="absolute right-8 top-13 bg-[#e6f5fd] shadow-xl rounded-lg w-44 px-2 py-2 z-10"
            >
              <ul className="space-y-1.5">
                <li>
                  <a
                    href="/"
                    className="flex justify-start items-center text-black hover:bg-[#c3d4dd55] p-1 rounded"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      navigate("/profile"); // Navigate to the profile page
                    }}
                  >
                    <img src={Registration2} className="w-6 mr-2" alt="" />
                    Profile
                  </a>
                </li>
                <hr className="text-[#8ca7b6]" />
                <li>
                  <a
                    href="/"
                    className="flex justify-start items-center text-black hover:bg-[#c3d4dd55] p-1 rounded"
                  >
                    <img src={Timemachine2} className="w-6 mr-2" alt="" />
                    Next Round
                  </a>
                </li>
                <hr className="text-[#8ca7b6]" />
                <li>
                  <a
                    href="/"
                    className="flex justify-start items-center text-black hover:bg-[#c3d4dd55] p-1 rounded"
                  >
                    <img src={Settings} className="w-6 mr-2" alt="" />
                    Settings
                  </a>
                </li>
                <hr className="text-[#8ca7b6]" />
                <li>
                  <a
                    href="/"
                    className="flex justify-start items-center text-black hover:bg-[#c3d4dd55] p-1 rounded"
                  >
                    <img src={Logout} className="w-6 mr-2" alt="" />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
