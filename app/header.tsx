"use client"
import Link from "next/link";
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon
import { IoMdSearch } from 'react-icons/io'; // Import Search icon


export default function Header() {
  return (
    <header className="bg-gradient-to-b from-white to-gray-200 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo and Brand */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="logo w-12 h-12 bg-gradient-to-r from-white to-gray-400 relative overflow-hidden clip-path-diamond">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-200 text-4xl leading-none">★</span>
            </div>
          </div>
          {/* Brand Name */}
          <span className="text-2xl font-bold text-gray-700">Galaxy</span>
        </div>

         {/* Navigation Links */}
         <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/" className="text-gray-700 hover:text-black">
              Home
            </Link>
          </li>

          {/* About */}
          <li>
            <Link href="/About" className="text-gray-700 hover:text-black">
              About
            </Link>
          </li>

          {/* Shop Dropdown */}
          <li className="relative group">
            <button className="text-gray-700 hover:text-black focus:outline-none " aria-haspopup="true">
              Shop
            </button>

            {/* Dropdown Content */}
            <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-4 transition-all duration-300 z-50">
              {/* Categories */}
              <h3 className="px-4 py-2 text-lg font-bold text-gray-800 border-b">
                Categories
              </h3>
              <ul className="py-2">
                <li>
                  <Link href="/bridal" className="block px-4 py-2 hover:bg-gray-100 transition-all">
                    Bridal Collections
                  </Link>
                </li>
                <li>
                  <Link href="/latest" className="block px-4 py-2 hover:bg-gray-100 transition-all">
                    Latest
                  </Link>
                </li>
                <li>
                  <Link href="/discounted" className="block px-4 py-2 hover:bg-gray-100 transition-all">
                    Discounted
                  </Link>
                </li>
                <li>
                  <Link href="/gifts" className="block px-4 py-2 hover:bg-gray-100 transition-all">
                    Gifts for Her
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link href="/contact" className="text-gray-700 hover:text-black">
              Contact
            </Link>
          </li>
        </ul>

         {/* Search Bar */}
         <div className="relative flex items-center w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 rounded-md border border-gray-400 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <IoMdSearch className="absolute right-3 text-white text-xl" />
        </div>

        {/* Header Icons (Cart and Profile) */}
        <div className="flex space-x-6">
          {/* Cart Icon (Red) */}
          <Link href="#" className="relative group">
            <FaShoppingCart
              className="w-6 h-6 text-red-500 group-hover:text-yellow-500 transition duration-300"
            />
          </Link>

        
    


</div>
         
      </div>
    </header>
  );
}


