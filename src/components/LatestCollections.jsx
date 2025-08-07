
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "Hikvision DS-2CD2143G0-I",
    price: "$100.99 USD",
    oldPrice: "$150.99 USD",
    img: "/imgi_4_D270.png",
  },
  {
    title: "CP Plus CP-UNC-T41L2S",
    price: "$150.99 USD",
    oldPrice: null,
    img: "/imgi_4_D270-18_Zone.png",
  },
  {
    title: "Hikvision HD-2dfg2143G0-I",
    price: "$100.99 USD",
    oldPrice: null,
    img: "/imgi_4_D330-18-IP65.png",
  },
  {
    title: "Dahua IPC-HDW2231T-AS",
    price: "$120.99 USD",
    oldPrice: "$160.99 USD",
    img: "/imgi_4_D270.png",
  },
  {
    title: "CP Plus CP-UNC-T41L2S",
    price: "$150.99 USD",
    oldPrice: null,
    img: "/imgi_4_D270-18_Zone.png",
  },
  {
    title: "Hikvision DS-2CD2143G0-I",
    price: "$100.99 USD",
    oldPrice: "$150.99 USD",
    img: "/imgi_4_D330-18-IP65.png",
  },
  {
    title: "Dahua IPC-HDW2231T-AS",
    price: "$120.99 USD",
    oldPrice: "$160.99 USD",
    img: "/imgi_4_D270.png",
  },
  {
    title: "Hikvision HD-2dfg2143G0-I",
    price: "$100.99 USD",
    oldPrice: null,
    img: "/imgi_4_D270-18_Zone.png",
  },
];

const LatestCollection = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="mx-20 text-2xl md:text-3xl font-semibold text-gray-900">
          Latest Collection
        </h2>
        <button className="flex items-center gap-1 text-sm border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 transition">
          View All
          <span className="text-xl">→</span>
        </button>
      </div>

      <div className="grid sm:mx-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
            img={product.img}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestCollection;
