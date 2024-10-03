"use client"
import React from 'react';



const GiftForHer: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="https://media.istockphoto.com/id/1455250468/video/engagement-diamond-ring.mp4?s=mp4-640x640-is&k=20&c=wDdPMecQOh1V3z3eTlNP4DgaEiCN1zO-L1NJdqWs3To=" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for darkening the video */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content over the video */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Gifts for Her</h2>
        <p className="text-lg md:text-2xl mb-8">
          Discover exquisite gifts that she'll cherish forever.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default GiftForHer;