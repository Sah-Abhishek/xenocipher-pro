
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Branding + Info */}
        <div>
          <h2 className="text-2xl font-bold">
            Xeno<span className="text-blue-700">Cipher</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Special offers for subscription. Don’t miss out on future offers,
            new arrival, & experts fashion tips
          </p>
          <p className="mt-4 font-medium">info@xenocipher.com</p>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold mb-4">Pages</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Shop</li>
            <li>Service</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Career at Xenocipher</li>
            <li>About Xenocipher</li>
            <li>Gift Cards</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Need Help */}
        <div>
          <h3 className="font-semibold mb-4">Need Help</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Order Status</li>
            <li>Shipping & Delivery</li>
            <li>FAQ & Helps</li>
            <li>Terms & Conditions</li>
            <li>Legal & Privacy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6 text-gray-400 text-sm">
        <p>Copyright ©2025 - All rights reserved</p>
        <div className="flex space-x-4 mt-4 sm:mt-0 text-white text-lg">
          <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaXTwitter className="hover:text-blue-400 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
