import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-500">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-400">
            We'd love to hear from you! Reach out to us through any of the following methods.
          </p>
        </div>

        {/* Contact Information */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="mb-8 lg:mb-0 text-center">
            <FaMapMarkerAlt className="text-yellow-500 text-3xl mb-3" />
            <h3 className="text-xl font-semibold">Our Location</h3>
            <p className="mt-2 text-gray-400">123 Diamond Street, Karachi, Pakistan</p>
          </div>
          <div className="mb-8 lg:mb-0 text-center">
            <FaPhoneAlt className="text-yellow-500 text-3xl mb-3" />
            <h3 className="text-xl font-semibold">Phone Number</h3>
            <p className="mt-2 text-gray-400">+92 300 123 4567</p>
          </div>
          <div className="text-center">
            <FaEnvelope className="text-yellow-500 text-3xl mb-3" />
            <h3 className="text-xl font-semibold">Email Address</h3>
            <p className="mt-2 text-gray-400">contact@galaxydiamonds.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-yellow-500 text-center mb-6">
            Send Us a Message
          </h3>
          <form action="#" method="POST" className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg text-gray-400 mb-2">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2 text-gray-900 rounded-md border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg text-gray-400 mb-2">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 text-gray-900 rounded-md border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-lg text-gray-400 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 text-gray-900 rounded-md border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-yellow-500 text-white font-bold text-lg rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
