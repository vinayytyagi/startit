import { useState, useEffect } from "react";
import { Edit2, Calendar, Trash } from "lucide-react"; // Import Trash icon
import Header from "./Header";
import ProfileTabSection from "./ProfileTabSection";

// Modal component for editing profile details
const EditProfileModal = ({ isOpen, closeModal, saveProfile, profile }) => {
  const [name, setName] = useState(profile.name);
  const [tagline, setTagline] = useState(profile.tagline);
  const [location, setLocation] = useState(profile.location);
  const [bio, setBio] = useState(profile.bio);
  const [socialLinks, setSocialLinks] = useState(profile.socialLinks);

  useEffect(() => {
    // Lock body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Reset when the component is unmounted
    };
  }, [isOpen]);

  const handleSave = () => {
    saveProfile({ name, tagline, location, bio, socialLinks });
    closeModal();
  };

  const handleSocialLinkChange = (platform, url) => {
    setSocialLinks((prev) => ({
      ...prev,
      [platform]: url,
    }));
  };

  const handleDeleteInput = (setter) => {
    setter("");
  };

  const handleDeleteSocialLink = (platform) => {
    setSocialLinks((prev) => ({
      ...prev,
      [platform]: "",
    }));
  };

  if (!isOpen) return null;

  return (
    // Modal for editing
    <div className="fixed inset-0 backdrop-blur-sm backdrop-brightness-75 bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-white p-6 rounded-lg w-full max-w-xs sm:max-w-sm shadow-xl overflow-y-auto"
        style={{ maxHeight: "80vh" }}
      >
        <h3 className="text-xl font-semibold mb-4">Edit Profile</h3> {/* Edit Profile */}

        {/* Name Input */}
        <label className="block text-gray-700">Name</label>
        <div className="relative mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 w-full pr-10"
          />
          {name && (
            <button
              onClick={() => handleDeleteInput(setName)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-600"
            >
              <Trash className="w-5 h-5 cursor-pointer" />
            </button>
          )}
        </div>

        {/* Tagline Input */}
        <label className="block text-gray-700">Tagline</label>
        <div className="relative mb-4">
          <input
            type="text"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            className="border border-gray-300 p-2 w-full pr-10"
          />
          {tagline && (
            <button
              onClick={() => handleDeleteInput(setTagline)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-600"
            >
              <Trash className="w-5 h-5 cursor-pointer" />
            </button>
          )}
        </div>

        {/* Location Input */}
        <label className="block text-gray-700">Location</label>
        <div className="relative mb-4">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 p-2 w-full pr-10"
          />
          {location && (
            <button
              onClick={() => handleDeleteInput(setLocation)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-600"
            >
              <Trash className="w-5 h-5 cursor-pointer" />
            </button>
          )}
        </div>

        {/* Bio Input */}
        <label className="block text-gray-700">Bio</label>
        <div className="relative mb-4">
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="border border-gray-300 p-2 w-full pr-10"
          />
          {bio && (
            <button
              onClick={() => handleDeleteInput(setBio)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-600"
            >
              <Trash className="w-5 h-5 cursor-pointer" />
            </button>
          )}
        </div>

        {/* Social Media Links */}
        {["LinkedIn", "Facebook", "Instagram", "X"].map((platform, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700">{platform} URL</label>
            <div className="relative">
              <input
                type="url"
                value={socialLinks[platform] || ""}
                onChange={(e) =>
                  handleSocialLinkChange(platform, e.target.value)
                }
                className="border border-gray-300 p-2 w-full pr-10"
              />
              {socialLinks[platform] && (
                <button
                  onClick={() => handleDeleteSocialLink(platform)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-600"
                >
                  <Trash className="w-5 h-5 cursor-pointer" />
                </button>
              )}
            </div>
          </div>
        ))}

        <div className="flex justify-end space-x-4">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 rounded-md cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-600 text-white rounded-md cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "Sujata Rani",
    tagline: "Enter Your Tagline",
    location: "Enter Your Location",
    bio: "Enter Your Bio",
    socialLinks: {
      LinkedIn: "",
      Facebook: "",
      Instagram: "",
      X: "",
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const saveProfile = (updatedProfile) => {
    setProfile(updatedProfile);
    // Here you can make an API call to save the updated profile if needed
  };

  const renderSocialMediaIcon = (platform) => {
    const iconUrls = {
      LinkedIn: "c/ca/LinkedIn_logo_initials.png",
      Facebook: "1/1b/Facebook_icon.svg",
      Instagram: "a/a5/Instagram_icon.png",
      X: "5/53/X_logo_2023_original.svg",
    };

    return (
      <img
        src={`https://upload.wikimedia.org/wikipedia/commons/${iconUrls[platform]}`}
        alt={platform}
        className={`w-6 h-6 cursor-pointer ${
          profile.socialLinks[platform] ? "text-blue-600" : "grayscale"
        }`}
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#edf3fc] pb-10">
      <Header />
      {/* Profile Card */}
      <div className="max-w-xl mx-auto mt-8 bg-white shadow-md rounded-lg p-6 border border-gray-200 relative">
        {/* Edit Button */}
        <button
          onClick={openModal}
          className="absolute top-4 right-4 p-2 bg-green-600 text-white rounded-full cursor-pointer"
        >
          <Edit2 className="w-5 h-5" />
        </button>

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
              <span className="text-lg font-bold text-blue-900">
                {profile.name}
              </span>
            </div>

            {/* Tagline Section */}
            <div className="flex items-center mt-2">
              <span className="text-gray-700 font-medium w-24">Tagline:</span>
              <span className="border-b border-gray-400 flex-1">
                {profile.tagline}
              </span>
            </div>

            {/* Location Section */}
            <div className="flex items-center mt-2">
              <span className="text-gray-700 font-medium w-24">Location:</span>
              <span className="border-b border-gray-400 flex-1">
                {profile.location}
              </span>
            </div>

            <div className="flex items-center justify-between mt-4">
              {/* Social Media Icons */}
              <div className="flex items-center space-x-3">
                {["LinkedIn", "Facebook", "Instagram", "X"].map((platform) => (
                  <a
                    key={platform}
                    href={profile.socialLinks[platform] || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      profile.socialLinks[platform]
                        ? "text-blue-600"
                        : "text-gray-400"
                    }
                  >
                    {renderSocialMediaIcon(platform)}
                  </a>
                ))}
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
            <span className="border-b border-gray-400 flex-1">
              {profile.bio}
            </span>
          </div>
        </div>
      </div>

      <ProfileTabSection />
      <EditProfileModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        saveProfile={saveProfile}
        profile={profile}
      />
    </div>
  );
};

export default ProfilePage;
