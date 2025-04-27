import React from 'react';
import TopMateCard from './TopMateCard';

const TopMateSection = () => {
  const profileData = {
    title: "Github Profile Review",
    description: "Checkout my offerings and book a slot at",
    duration: "30 mins",
    profileImage: "/sanjay.png", // Replace with your profile image
    username: "sanjaykv"
  };

  return (
    <div className="px-4">
      <div className=" mx-auto">
        <div className=" mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book a Session
          </h1>
          <p className="text-lg text-gray-600">
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