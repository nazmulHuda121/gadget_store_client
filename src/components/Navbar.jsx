'use client';

import Link from 'next/link';
import { useState, useContext } from 'react';
import { AuthContext } from '@/AuthProvider/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/firebase.config';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const links = (
    <>
      <Link
        href="/"
        className="hover:text-purple-600  lg:hover:scale-110 transition"
      >
        Home
      </Link>

      <Link
        href="/manage-products"
        className="hover:text-purple-600  lg:hover:scale-110 transition"
      >
        Manage Products
      </Link>

      <Link
        href="/add-product"
        className="hover:text-purple-600  lg:hover:scale-110 transition"
      >
        Add Product
      </Link>

      <Link
        href="/contact"
        className="hover:text-purple-600  lg:hover:scale-110 transition"
      >
        Contact
      </Link>
      <Link
        href="/servic"
        className="hover:text-purple-600  lg:hover:scale-110 transition"
      >
        Service
      </Link>
    </>
  );

  return (
    <nav className="w-full backdrop-blur bg-white/90 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold text-purple-600">
          Gadget<span className="text-blue-600">Store</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg text-gray-900">{links}</ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          {user ? (
            <button
              onClick={() => signOut(auth)}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="px-6 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-100 transition"
            >
              Login
            </Link>
          )}
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
        <div className="md:hidden bg-white px-4 pb-4 shadow-inner transition-all duration-300">
          <ul className="flex flex-col gap-4 text-lg font-medium text-gray-700 pt-2">
            {links}
          </ul>

          {/* Mobile Buttons */}
          <div className="mt-4 flex flex-col gap-3">
            {user ? (
              <button
                onClick={() => signOut(auth)}
                className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="w-full px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-100 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
