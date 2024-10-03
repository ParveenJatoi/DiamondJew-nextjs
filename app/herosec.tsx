 "use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

const images = [
  '/images/women1.jpg', // Path from the public folder
  '/images/dimond3.jpg',
  '/images/women3.jpg',
  '/images/pandat5.jpg'
];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        poster={images[currentImageIndex]} // Fallback image if the video doesn't load
      >
        <source src="/video/background.mp4" type="video/mp4" />
        {/* If video doesn't load, display image */}
      </video>

      {/* Overlay for darkening the video */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Image slider as fallback */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Image
          src={images[currentImageIndex]} // Use the src directly
          alt={`Slide ${currentImageIndex + 1}`}
          layout="fill" // Ensures the image fills the entire container
          objectFit="cover" // Ensures the image covers the entire area
          quality={100} // High-quality image rendering
          className="transition-transform transform-gpu duration-1000"
        />
      </div>

      {/* Text over the hero section */}
      <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Galaxy Diamond Jewelry
        </h1>
        <p className="mt-2 text-base md:text-lg">
          Find the Perfect Piece for Every Occasion
        </p>
        <button className="mt-4 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition">
          Explore Collection
        </button>
      </div>
    </div>
  );
};

export default HeroSection;