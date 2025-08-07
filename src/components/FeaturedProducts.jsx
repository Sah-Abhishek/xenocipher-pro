
import React from "react";

const products = [
  {
    title: "D270-1-IP54",
    discount: "Get 20% off",
    img: "/imgi_4_D270.png", // Replace with your image path
  },
  {
    title: "D270 - 18 - IP54",
    discount: "Get 25% off",
    img: "/imgi_4_D270-18_Zone.png",
  },
  {
    title: "D330-18-IP65",
    discount: "Get 20% off only today",
    img: "/imgi_4_D330-18-IP65.png",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="px-4 md:px-12 py-16 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold sm:mx-20 text-gray-900">Featured Products</h2>
        <button className="flex items-center space-x-2 border border-gray-300 text-sm text-gray-700 px-4 py-2 rounded-full hover:bg-gray-100 transition">
          <span>View All</span>
          <span>→</span>
        </button>
      </div>

      {/* Cards */}
      <div className="grid sm:mx-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#f3f6ff]   p-6 rounded-xl hover:shadow-lg transition duration-300 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <h3 className="font-semibold text-xl text-gray-900">{product.title}</h3>
              <p className="text-sm text-gray-600 mb-5">{product.discount}</p>
              <a
                href="#"
                className="text-blue-700 text-sm font-medium flex items-center space-x-1"
              >
                <span>Shop Now</span>
                <span>→</span>
              </a>
            </div>
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-80 object-contain mt-4"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
