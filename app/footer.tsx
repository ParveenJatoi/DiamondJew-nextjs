import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">About Galaxy</h3>
          <p>
            Galaxy is a leading luxury jewelry brand specializing in diamonds and precious stones.
            Our craftsmanship is of the highest quality, and our designs are timeless.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
              {/* Facebook Icon */}
              <svg
                className="w-6 h-6 fill-current text-gray-400 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.013 3.657 9.167 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.845c0-2.514 1.493-3.894 3.776-3.894 1.095 0 2.238.195 2.238.195v2.472h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.167 22 17.013 22 12z" />
              </svg>
            </Link>

            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
              {/* Instagram Icon */}
              <svg
                className="w-6 h-6 fill-current text-gray-400 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.259.058 2.07.27 2.554.448a5.09 5.09 0 011.874 1.055 5.09 5.09 0 011.056 1.874c.178.485.39 1.295.448 2.554.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.058 1.259-.27 2.07-.448 2.554a5.09 5.09 0 01-1.055 1.874 5.09 5.09 0 01-1.874 1.056c-.485.178-1.295.39-2.554.448-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.259-.058-2.07-.27-2.554-.448a5.09 5.09 0 01-1.874-1.055 5.09 5.09 0 01-1.056-1.874c-.178-.485-.39-1.295-.448-2.554C2.175 15.583 2.163 15.204 2.163 12s.012-3.584.07-4.849c.058-1.259.27-2.07.448-2.554A5.09 5.09 0 013.736 3.48a5.09 5.09 0 011.874-1.056c.485-.178 1.295-.39 2.554-.448 1.265-.058 1.645-.07 4.849-.07z" />
              </svg>
            </Link>

            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
              {/* Twitter Icon */}
              <svg
                className="w-6 h-6 fill-current text-gray-400 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.832 9.832 0 01-2.828.775 4.933 4.933 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.38 4.482 13.961 13.961 0 01-10.141-5.146 4.822 4.822 0 00-.666 2.475c0 1.706.87 3.213 2.188 4.002a4.898 4.898 0 01-2.229-.616v.061c0 2.395 1.699 4.396 3.949 4.85a4.92 4.92 0 01-2.224.084c.628 1.953 2.445 3.375 4.596 3.415a9.865 9.865 0 01-6.103 2.103c-.394 0-.779-.023-1.165-.067a13.925 13.925 0 007.548 2.211c9.056 0 14.004-7.496 14.004-13.986 0-.213-.004-.425-.012-.636A10.027 10.027 0 0024 4.557z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest collections and offers.</p>
          <div className="flex relative">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 w-full bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-white hover:text-blue-500 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Copyright */}
      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        <div className="text-sm">&copy; 2024 Galaxy. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;