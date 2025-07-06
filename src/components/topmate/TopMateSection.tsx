import React from 'react';
import TopMateCard from './TopMateCard';

const TopMateSection = () => {
  const profileData = {
    title: "1:1 Mentorship Call",
    description: "Book a slot, Free for Hive Community Members",
    duration: "30 mins",
    profileImage: "/sanjay.png", // Replace with your profile image
    username: "sanjaykv"
  };

  return (
    <div className="px-4">
      <div className=" mx-auto">
        <div className=" mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Book a Session
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get personalized guidance and feedback through one-on-one sessions
          </p>
        </div>
        
        <div className="">
          {/* You can add multiple cards here with different data */}
          <TopMateCard {...profileData} />
        </div>
      </div>
    </div>
  );
};

export default TopMateSection; 