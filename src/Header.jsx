import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown menu for profile
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Toggle the navigation menu for mobile view
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const navigate = useNavigate(); // Initialize navigate

  return (
    <header>
      <div className="flex justify-between shadow bg-white text-white py-3 px-6">
        {/* Logo */}
        <img
          className="h-10 cursor-pointer"
          src="https://aperobotics.files.wordpress.com/2014/11/startit-logo-raster.png"
          alt="logo"
          onClick={() => navigate("/")} // Navigate to the home page
        />
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
            src="https://www.pngrepo.com/png/384670/512/account-avatar-profile-user.png"
            alt="profile-avatar"
            onClick={toggleDropdown}
          />

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-8 top-13 bg-[#e6f5fd] shadow-xl rounded-lg w-48 p-2 z-10">
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="block text-black hover:text-green-500 px-2 rounded"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      navigate("/profile"); // Navigate to the profile page
                    }}
                  >
                    Profile
                  </a>
                </li>
                <hr className="text-[#8ca7b6]" />
                <li>
                  <a
                    href="/"
                    className="block text-black hover:text-green-500 px-2 rounded"
                  >
                    Next Round
                  </a>
                </li>
                <hr className="text-[#8ca7b6]" />
                <li>
                  <a
                    href="/"
                    className="block text-black hover:text-green-500 px-2 rounded"
                  >
                    Settings
                  </a>
                </li>
                <hr className="text-[#8ca7b6]" />
                <li>
                  <a
                    href="/"
                    className="block text-black hover:text-green-500 px-2 rounded"
                  >
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
