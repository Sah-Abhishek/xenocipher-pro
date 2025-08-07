import React from "react";
import { FiPackage, FiCreditCard, FiRotateCw, FiStar } from "react-icons/fi";

const TestimonialSection = () => {
  const features = [
    {
      icon: <FiPackage className="text-4xl text-blue-600" />,
      title: "FREE SHIPPING",
      subtitle: "You will love at great low prices",
    },
    {
      icon: <FiCreditCard className="text-4xl text-blue-600" />,
      title: "FLEXIBLE PAYMENT",
      subtitle: "Pay with Multiple Credit cards",
    },
    {
      icon: <FiRotateCw className="text-4xl text-blue-600" />,
      title: "EASY RETURN",
      subtitle: "Return Your Product Very Easily",
    },
    {
      icon: <FiStar className="text-4xl text-blue-600" />,
      title: "PREMIUM QUALITY",
      subtitle: "Outstanding Product Quality",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 space-y-4 md:space-y-0">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 max-w-xl">
          What Client Say About Us
        </h2>
        <div className="space-x-2 flex">
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            ←
          </button>
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            →
          </button>
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="https://plus.unsplash.com/premium_photo-1682430695616-777ce19de36c?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Client"
            className="rounded-lg w-full max-w-md object-cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Text */}
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm max-w-xl mx-auto md:mx-0">
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
            I purchased a full CCTV system for my home, and I couldn’t be
            happier. The camera quality is crystal-clear, even in low light,
            and the installation team was professional and efficient. I feel so
            much safer now knowing my property is secure.
          </p>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-800">Esther Howard</h4>
              <p className="text-sm text-gray-500">Co-Founder, Konom</p>
            </div>
            <div className="text-yellow-500 text-lg">{Array(5).fill("★").join("")}</div>
          </div>
        </div>
      </div>

      {/* Features List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {features.map((feature, i) => (
          <div key={i} className="flex flex-col items-center space-y-3">
            {feature.icon}
            <h4 className="font-semibold text-base">{feature.title}</h4>
            <p className="text-sm text-gray-500">{feature.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
