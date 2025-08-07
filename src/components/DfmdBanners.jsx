import React from "react";

const banners = [
  {
    title: "Indoor CCTV Camera",
    description: "Seamless Indoor Surveillance with Discreet Dome Cameras",
    img: "/imgi_4_D270.png",
    alt: "Indoor Camera",
  },
  {
    title: "Outdoor CCTV Camera",
    description:
      "Durable Outdoor Security with High-Performance Bullet Cameras",
    img: "/imgi_4_D270-18_Zone.png",
    alt: "Outdoor Camera",
  },
];

const DfmdBanners = () => {
  return (
    <section className="py-10 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {banners.map((banner, index) => (
          <div
            key={index}
            className="relative rounded-xl lg:mx-20 overflow-hidden h-80 shadow-md group"
          >
            <img
              src={banner.img}
              alt={banner.alt}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bg-black/50 inset-0 z-10" />
            <div className="relative z-10 p-6 text-white flex flex-col justify-end h-full">
              <p className="text-xs tracking-widest text-white/70 uppercase mb-2">
                {banner.title}
              </p>
              <h3 className="text-xl font-semibold leading-snug mb-4 max-w-xs">
                {banner.description}
              </h3>
              <a
                href="#"
                className="text-sm font-medium inline-flex items-center gap-1 hover:underline"
              >
                Shop Now <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DfmdBanners;
