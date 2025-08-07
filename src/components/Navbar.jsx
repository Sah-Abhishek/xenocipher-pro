import React, { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm px-4 md:px-10 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="text-black">Xeno</span>
        <span className="text-blue-600">Cipher</span>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex tracking-wider space-x-6 font-medium text-gray-700">
        <li className="relative">
          <a href="#" className="text-blue-600">
            Home
          </a>
          <div className="absolute left-0 right-0 h-0.5 bg-blue-600 mt-1 rounded" />
        </li>
        <li>
          <a href="#" className="hover:text-blue-600">
            Shop
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600">
            Service
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600">
            About us
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600">
            Contact us
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-gray-700 text-2xl focus:outline-none"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Right side: Search & Icons */}
      <div className="flex items-center space-x-4 ml-4">
        {/* Search Bar (hidden on xs) */}
        <div className="relative hidden sm:block">
          <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for products"
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Cart Icon */}
        <button className="relative">
          <FiShoppingCart className="text-xl text-gray-700" />
          <span className="absolute -top-1 -right-2 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            0
          </span>
        </button>

        {/* User Icon */}
        <button>
          <FiUser className="text-xl text-gray-700" />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <ul className="absolute top-full left-0 right-0 bg-white shadow-md flex flex-col space-y-4 px-6 py-6 md:hidden z-20">
          <li>
            <a href="#" className="block text-blue-600 font-semibold">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-blue-600">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-blue-600">
              Service
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-blue-600">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-blue-600">
              Contact us
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
