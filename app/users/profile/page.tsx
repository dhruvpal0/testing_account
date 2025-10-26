import React from "react";
import { Edit, ArrowLeft, Briefcase } from "lucide-react";

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-4 pt-4 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ArrowLeft />
          <h2 className="text-lg font-semibold">Profile on Medial</h2>
        </div>
        <button>
          <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
            <path d="M21 12l-18 12V0z" />
          </svg>
        </button>
      </div>

      {/* Profile Section */}
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/80x80.png?text=DP"
            alt="profile"
            className="w-20 h-20 rounded-full border-2 border-purple-400"
          />
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
            50%
          </span>
        </div>

        {/* User Info */}
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <h1 className="text-xl font-bold">Dhruv Pal</h1>
              <p className="text-gray-400 text-sm">Founder @p</p>
              <p className="text-xs text-gray-500 mt-1">🌍 Earth, Milky Way</p>
              <p className="text-xs text-gray-500">📅 Joined Feb 2025</p>
            </div>
            <button>
              <Edit className="w-5 h-5" />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-3">
            <i className="fab fa-linkedin text-2xl"></i>
            <i className="fab fa-twitter text-2xl"></i>
            <i className="fab fa-instagram text-2xl"></i>
            <i className="fab fa-facebook text-2xl"></i>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 mt-4">
            <button className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              6 Followers
            </button>
            <button className="border border-white px-4 py-1 rounded-full text-sm font-medium">
              Messages
            </button>
            <button className="flex items-center gap-1 bg-gray-800 px-4 py-1 rounded-full text-sm">
              <span className="text-white">📊</span> 0 Profile Views
            </button>
          </div>
        </div>
      </div>

      {/* Alert */}
      <div className="bg-red-900 text-red-300 text-sm mt-6 p-3 rounded-md">
        You may not have access to certain features.{" "}
        <a href="#" className="underline text-red-200">
          Complete profile now.
        </a>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mt-6 border-b border-gray-700 pb-2 text-sm">
        <button className="text-purple-400 border-b-2 border-purple-400 pb-1 font-semibold">
          About
        </button>
        <button className="text-gray-500">Portfolio</button>
        <button className="text-gray-500">Posts</button>
        <button className="text-gray-500">Replies</button>
      </div>

      {/* About Section */}
      <div className="mt-6 space-y-4">
        {/* Summary */}
        <div>
          <h3 className="text-white font-semibold text-lg">Summary</h3>
          <p className="text-sm mt-1 text-gray-300">il am the founder of</p>
        </div>

        {/* Experience */}
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-lg">Experience</h3>
          <button className="text-purple-400 text-2xl">+</button>
        </div>

        {/* Education */}
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-lg">Education</h3>
          <button className="text-purple-400 text-2xl">+</button>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center mt-8">
          <Briefcase className="w-16 h-16 text-purple-400" />
          <p className="text-sm text-center mt-3 text-gray-400">
            Start adding your experience to validate your profile
          </p>
        </div>

        <div className="flex justify-center mt-4">
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium">
            + Add from LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
