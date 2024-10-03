"use client"
import Link from "next/link";


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

        {/* Navbar */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#" className="navbar-item text-gray-700 hover:text-yellow-500 transition duration-300">
            Home
          </Link>
          <Link href="#" className="navbar-item text-gray-700 hover:text-yellow-500 transition duration-300">
            Shop
          </Link>
          <Link href="#" className="navbar-item text-gray-700 hover:text-yellow-500 transition duration-300">
            Collections
          </Link>
          <Link href="#" className="navbar-item text-gray-700 hover:text-yellow-500 transition duration-300">
            About Us
          </Link>
          <Link href="#" className="navbar-item text-gray-700 hover:text-yellow-500 transition duration-300">
            Contact
          </Link>
        </nav>


         

          {/* Cart Icon (Red) */}
          <Link href="#" className="relative group">
            <svg
              className="w-6 h-6 text-red-500 group-hover:text-yellow-500 transition duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0L5.4 5m0 0H3m0 0l1.5 8h13a2 2 0 002-2V6a2 2 0 00-2-2H5.4m1.6 8H17m4 8H6M6 21a2 2 0 100-4 2 2 0 000 4zM18 21a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
          </Link>
        
      </div>
    </header>
  );
}


