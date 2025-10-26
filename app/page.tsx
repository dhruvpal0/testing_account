// import Image from 'next/image'
// import Link from 'next/link'
// import ProductCard from './components/ProductCard'

// export default function Home() {
//   return (
//     <main>
//      <h1>hello world!</h1>
//       <p>{new Date().toLocaleTimeString()}</p>
//         <Link href="/users">User</Link>
//         <ProductCard />
//     </main>
//   )
// }
"use client"; // This directive marks the component as a Client Component


import React, { useState } from 'react';
import { ChevronLeft, Send, Edit, MapPin, Calendar, Briefcase, Plus } from 'lucide-react'; // Using lucide-react for icons

// Main App component
const App = () => {
  const [activeTab, setActiveTab] = useState('About'); // State to manage active tab

  // Data for the profile, can be fetched from an API in a real application
  const profileData = {
    name: "Dhruv Pal",
    designation: "Founder @p",
    profilePic: "https://placehold.co/100x100/A78BFA/ffffff?text=DP", // Placeholder image
    progress: 50,
    location: "Earth, Milky Way",
    joinedDate: "Feb 2025",
    followers: 6,
    profileViews: 0,
    summary: "I am the founder of a startup focused on innovative solutions.",
  };

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'About':
        return (
          <div className="p-4 space-y-6">
            {/* Summary Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-100 mb-2">Summary</h2>
              <p className="text-gray-300">{profileData.summary}</p>
            </div>

            {/* Experience Section */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-100">Experience</h2>
              <button className="text-gray-400 hover:text-white">
                <Plus size={24} />
              </button>
            </div>

            {/* Education Section */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-100">Education</h2>
              <button className="text-gray-400 hover:text-white">
                <Plus size={24} />
              </button>
            </div>

            {/* Add Experience Prompt */}
            <div className="text-center mt-8 p-4 bg-gray-800 rounded-lg shadow-md">
              <Briefcase size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-300 mb-6">Start adding your experience to validate your profile</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                + Add from LinkedIn
              </button>
            </div>
          </div>
        );
      case 'Portfolio':
        return <div className="p-4 text-gray-300">Portfolio content goes here.</div>;
      case 'Posts':
        return <div className="p-4 text-gray-300">Posts content goes here.</div>;
      case 'Replies':
        return <div className="p-4 text-gray-300">Replies content goes here.</div>;
      case 'Likes':
        return <div className="p-4 text-gray-300">Likes content goes here.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <ChevronLeft size={24} className="text-gray-400" />
        <h1 className="text-lg font-semibold">Profile on Medial</h1>
        <Send size={24} className="text-gray-400" />
      </header>

      {/* Profile Summary Section */}
      <section className="p-4">
        <div className="flex items-center space-x-4 mb-4">
          {/* Profile Picture with Progress */}
          <div className="relative w-24 h-24">
            <img
              src={profileData.profilePic}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-2 border-purple-500"
            />
            {/* Progress Circle (simplified visual) */}
            <div className="absolute bottom-0 left-0 bg-purple-500 text-white text-xs font-bold rounded-full px-2 py-1 transform -translate-x-1/4 translate-y-1/4">
              {profileData.progress}%
            </div>
          </div>

          {/* Name and Designation */}
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{profileData.name}</h2>
              <Edit size={20} className="text-gray-400 cursor-pointer hover:text-white" />
            </div>
            <p className="text-gray-400">{profileData.designation}</p>
          </div>
        </div>

        {/* Location and Joined Date */}
        <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
          <div className="flex items-center space-x-1">
            <MapPin size={16} />
            <span>{profileData.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar size={16} />
            <span>Joined {profileData.joinedDate}</span>
          </div>
        </div>

        {/* Social Media Icons (placeholders) */}
        <div className="flex space-x-4 mb-6">
          <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" className="w-6 h-6" />
          </a>
          {/* Profile Views */}
          <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 text-sm text-gray-300">
            <Briefcase size={16} className="mr-2" />
            <span>{profileData.profileViews} Profile Views</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="flex-1 bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-4 rounded-full transition-colors">
            {profileData.followers} Followers
          </button>
          <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-full flex items-center justify-center space-x-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.486.207 2.73.417 3.99.626C10.147 16.095 12 18.21 12 20.556v1.686m-12-13.89c0 1.6 1.123 2.994 2.707 3.227 1.486.207 2.73.417 3.99.626C10.147 16.095 12 18.21 12 20.556v1.686m12-13.89c0 1.6-1.123 2.994-2.707 3.227-1.486.207-2.73.417-3.99.626C13.853 16.095 12 18.21 12 20.556v1.686m0-13.89c0 1.6-1.123 2.994-2.707 3.227-1.486.207-2.73.417-3.99.626C13.853 16.095 12 18.21 12 20.556v1.686" />
            </svg>
            <span>Messages</span>
          </button>
        </div>

        {/* Warning Message */}
        <div className="bg-red-800 text-red-200 text-sm p-3 rounded-md mb-6">
          You may not have access to certain features. <a href="#" className="underline font-semibold">Complete profile now.</a>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="flex justify-around border-b border-gray-800 bg-gray-900 sticky top-0 z-10">
        {['About', 'Portfolio', 'Posts', 'Replies', 'Likes'].map((tab) => (
          <button
            key={tab}
            className={`py-3 px-4 text-sm font-medium ${
              activeTab === tab
                ? 'text-purple-500 border-b-2 border-purple-500'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      <main className="pb-8">
        {renderTabContent()}
      </main>
    </div>
  );
};

export default App;