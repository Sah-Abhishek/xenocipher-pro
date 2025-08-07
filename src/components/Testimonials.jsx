
import React from "react";

const TestimonialSection = () => {
  return (
    <section className=" py-16 px-4 md:px-10 lg:px-20 lg:mx-20">
      {/* Section Heading */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          What Client Say About Us
        </h2>
        <div className="space-x-2">
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            ←
          </button>
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            →
          </button>
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
        {/* Image */}
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1682430695616-777ce19de36c?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Client"
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-700 mb-6">
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
            <div className="text-yellow-500 text-lg">
              {"★".repeat(5)}
            </div>
          </div>
        </div>
      </div>

      {/* Features List */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {[
          {
            icon: "📦",
            title: "FREE SHIPPING",
            subtitle: "You will love at great low prices",
          },
          {
            icon: "💳",
            title: "FLEXIBLE PAYMENT",
            subtitle: "Pay with Multiple Credit cards",
          },
          {
            icon: "🔁",
            title: "EASY RETURN",
            subtitle: "Return Your Product Very Easily",
          },
          {
            icon: "⭐",
            title: "PREMIUM QUALITY",
            subtitle: "Outstanding Product Quality",
          },
        ].map((feature, i) => (
          <div key={i} className="flex flex-col items-center space-y-2">
            <div className="text-3xl">{feature.icon}</div>
            <h4 className="font-semibold text-sm">{feature.title}</h4>
            <p className="text-sm text-gray-500">{feature.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
