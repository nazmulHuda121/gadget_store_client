'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full backdrop-blur bg-white/80 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={'/'} className="text-3xl font-extrabold text-purple-600">
          Gadget<span className="text-blue-600">Store</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold text-gray-700">
          <Link
            href={'/'}
            className="hover:text-purple-600 transition cursor-pointer"
          >
            Home
          </Link>
          <li className="hover:text-purple-600 transition cursor-pointer">
            Products
          </li>
          <Link
            href={'/addproduct'}
            className="hover:text-purple-600 transition cursor-pointer"
          >
            Add Product
          </Link>
          <li className="hover:text-purple-600 transition cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Link
            href={'/login'}
            className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-100 transition"
          >
            Login
          </Link>

          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-7 h-[3px] bg-gray-800 rounded"></span>
          <span className="w-7 h-[3px] bg-gray-800 rounded"></span>
          <span className="w-7 h-[3px] bg-gray-800 rounded"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-inner">
          <ul className="flex flex-col gap-4 text-lg font-medium text-gray-700 pt-2">
            <li className="hover:text-purple-600 transition cursor-pointer">
              Home
            </li>
            <li className="hover:text-purple-600 transition cursor-pointer">
              Products
            </li>
            <li className="hover:text-purple-600 transition cursor-pointer">
              About
            </li>
            <li className="hover:text-purple-600 transition cursor-pointer">
              Contact
            </li>
          </ul>

          <div className="mt-4 flex flex-col gap-3">
            <Link
              href={'/login'}
              className="w-full px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-100 transition"
            >
              Login
            </Link>

            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
