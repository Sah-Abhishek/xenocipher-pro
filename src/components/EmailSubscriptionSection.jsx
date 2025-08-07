
import React from "react";

const EmailSubscriptionSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#e0f0ff] to-[#f6fbff] py-16 px-4 md:px-10 lg:px-20 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
        Subscribe to our email <br className="sm:hidden" />
        newsletter and get 15% off
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Be the first to know about the latest in tech trends, exclusive offers and exciting product launches by subscribing to our newsletter
      </p>

      {/* Subscription Input */}
      <form className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
          required
        />
        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default EmailSubscriptionSection;
