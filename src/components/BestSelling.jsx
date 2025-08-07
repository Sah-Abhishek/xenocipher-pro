import React from "react";

const products = [
  {
    name: "Dahua SD1A203T-GN",
    price: "$250.99 USD",
    img: "/imgi_4_D270.png",
  },
  {
    name: "Reolink RLC-423",
    price: "$300.00 USD",
    img: "/imgi_4_D330-18-IP65.png",
  },
  {
    name: "Hikvision DS-2DE2A404IW-DE3",
    price: "$100.99 USD",
    img: "/imgi_4_D270.png",
  },
  {
    name: "Axis M5525-E",
    price: "$1650.99 USD",
    img: "/imgi_4_D270-18_Zone.png",
  },
];

const BestSelling = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 lg:mx-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Coming Soon
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

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-32 object-contain mb-4"
            />
            <h3 className="text-sm font-semibold text-gray-800 mb-1">
              {item.name}
            </h3>
            <p className="text-sm text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
