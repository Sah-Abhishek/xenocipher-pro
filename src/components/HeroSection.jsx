
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#e0f0ff] to-[#f6fbff] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your Trusted <br /> Partner in Security
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Explore top-quality surveillance systems and security products
            designed to protect your home and business. Shop now for the latest
            in safety and peace of mind.
          </p>

          {/* CTA Button */}
          <button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full transition duration-300 shadow">
            View Collection
          </button>

          {/* Happy Customers */}
          <div className="flex items-center space-x-4 mt-6">
            {/* Avatars */}
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="user1"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="user2"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="user3"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>

            {/* Customer Text */}
            <p className="text-gray-800 font-medium text-sm md:text-base">
              1.6 Million Happy Customer
            </p>
          </div>
        </div>

        {/* Image Content */}
        <div className="mt-12 md:mt-0 relative">
          <div className="w-[300px] md:w-[380px] h-auto relative z-10">
            <img
              src="/camera.png" // Replace with your local image path or URL
              alt="Security Camera"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="absolute top-4 left-4 md:top-6 md:left-6 w-full h-full rounded-3xl bg-blue-700/10 z-0" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
