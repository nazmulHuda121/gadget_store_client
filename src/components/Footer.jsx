export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Gadget<span className="text-purple-500">Store</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Your trusted destination for premium gadgets. Quality, innovation &
            customer satisfaction is our priority.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-purple-600 transition"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-purple-600 transition"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-purple-600 transition"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-purple-600 transition"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">
              Smartphones
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Laptops
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Accessories
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Smartwatch
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">
              About Us
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Careers
            </li>
            <li className="hover:text-white transition cursor-pointer">Blog</li>
            <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to get updates on new arrivals & exclusive offers.
          </p>

          <div className="flex bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-3 w-full focus:outline-none text-gray-200 placeholder-gray-400"
            />
            <button className="px-6 bg-purple-600 hover:bg-purple-700 transition text-white font-medium">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} GadgetStore — All rights reserved.
      </div>
    </footer>
  );
}
