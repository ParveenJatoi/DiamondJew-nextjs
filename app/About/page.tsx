import Image from 'next/image';

import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Intro Panel */}
      <section className="bg-gray-800 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Legacy Shines Bright</h1>
        <p className="max-w-2xl mx-auto text-lg">
          At Galaxy Diamonds, every piece tells a story of elegance, passion, and unmatched craftsmanship. For those who seek timeless beauty, our diamonds are crafted to be cherished for generations.
        </p>
      </section>

      {/* Timeline of Excellence */}
      <section className="bg-gray-900 py-20">
        <h2 className="text-3xl font-semibold text-center mb-10">Timeline of Excellence</h2>
        <div className="flex overflow-x-scroll space-x-6 px-10 scrollbar-hide">
          {[
            { year: '1980', text: 'Galaxy Diamonds was founded with a commitment to quality and artistry.' },
            { year: '1995', text: 'Our first flagship store opens, offering a unique jewelry experience.' },
            { year: '2010', text: 'Pioneers in sustainable sourcing of conflict-free diamonds.' },
            { year: '2023', text: 'Launch of the Galaxy Diamonds digital experience.' },
          ].map((milestone, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 bg-gray-800 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{milestone.year}</h3>
              <p className="text-sm">{milestone.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Galaxy Craftsmanship Difference */}
      <section className="py-20 bg-gray-800 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 px-10">
          <Image
            src="/images/dimond.jpg"
            alt="Craftsmanship"
            width={300}
            height={300}
            className="rounded-lg shadow-lg grayscale hover:grayscale-0 transition duration-500"
          />
        </div>
        <div className="md:w-1/2 px-10 mt-10 md:mt-0">
          <h2 className="text-3xl font-semibold mb-4">Crafted to Perfection</h2>
          <p>
            Our artisans at Galaxy Diamonds pour heart and soul into every piece. From the initial sketch to the final polish, we ensure unmatched quality and precision.
          </p>
        </div>
      </section>

      {/* Why Choose Galaxy Diamonds */}
      <section className="bg-gray-900 py-20">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Galaxy Diamonds</h2>
        <div className="flex flex-wrap justify-center space-x-6">
          {[
            { title: 'Exceptional Quality', text: 'Only the finest diamonds, chosen for their brilliance.' },
            { title: 'Ethical Sourcing', text: 'Conflict-free diamonds sourced responsibly.' },
            { title: 'Handcrafted Beauty', text: 'Each piece is uniquely crafted with passion and precision.' },
            { title: 'Customer Commitment', text: 'We’re dedicated to your satisfaction and trust.' },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md text-center w-64 m-4 transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-sm">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery of Iconic Designs */}
      <section className="py-20 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-10">Gallery of Iconic Designs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-10">
          {['chokar.jpeg ', 'chokar1.jpeg', 'fullset.jpeg', 'kara.jpeg','fullset3.jpeg','fullset4.jpeg'].map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                 src={`/images/${img}`}
                alt={`Iconic Design ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <span className="text-white text-lg font-semibold">View Collection</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials & Video Background */}
      <section className="relative py-20 bg-gray-900 text-center">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover opacity-20"
            src="/images/ring-video1.mp4"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10">What Our Customers Say</h2>
          <div className="text-lg italic">
            “Galaxy Diamonds captured the essence of our love in a piece that will be cherished forever.”
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Discover Our Collection</h2>
        <p className="mb-6">Experience the magic of Galaxy Diamonds firsthand. Schedule a visit to our showroom or explore online.</p>
        <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300">
          Explore Our Collection
        </button>
      </section>
    </div>
  );
}