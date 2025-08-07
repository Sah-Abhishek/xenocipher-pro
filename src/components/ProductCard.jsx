
import React from "react";

const ProductCard = ({ title, price, oldPrice, img }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow transition duration-200">
      <img
        src={img}
        alt={title}
        className="w-32 h-32 object-contain mx-auto mb-4"
      />
      <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
      <div className="flex justify-center items-center space-x-2">
        <span className="text-sm font-semibold text-gray-900">{price}</span>
        {oldPrice && (
          <span className="text-sm text-gray-400 line-through">{oldPrice}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
