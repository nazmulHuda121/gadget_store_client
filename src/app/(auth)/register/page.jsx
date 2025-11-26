'use client';

import { FaGoogle } from 'react-icons/fa';
import Link from 'next/link';
import { use } from 'react';
import { AuthContext } from '@/AuthProvider/AuthContext';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const { createUser } = use(AuthContext);
  const router = useRouter;
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    // Password validation
    const errors = [];
    if (!/[A-Z]/.test(password))
      errors.push('At least one uppercase letter required');
    if (!/[a-z]/.test(password))
      errors.push('At least one lowercase letter required');
    if (password.length < 6)
      errors.push('Password must be at least 6 characters long');

    if (errors.length > 0) {
      errors.forEach((err) => toast.error(err));
      return;
    }
    createUser(email, password)
      .then(() =>
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User has been create',
          showConfirmButton: false,
          timer: 1500,
        })
      )

      .then((err) => {
        console.log('error is', err);
      });
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&q=80&w=2000')",
      }}
    >
      <div className="bg-black/60 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-md border border-white/20">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-white drop-shadow-xl mb-8">
          Create Account
        </h2>

        <form onSubmit={handleRegister}>
          {/* Name */}
          <div className="mb-5">
            <label className="text-white font-medium">Full Name</label>
            <input
              name="name"
              type="text"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="text-white font-medium">Email</label>
            <input
              name="email"
              type="email"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-white font-medium">Password</label>
            <input
              name="password"
              type="password"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Create a password"
            />
          </div>

          {/* Register Button */}
          <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold text-lg hover:opacity-90 transition">
            Register
          </button>

          {/* Or divider */}
          <div className="mt-6 flex items-center gap-3 text-gray-300">
            <div className="flex-1 h-px bg-gray-400/50"></div>
            <span>OR</span>
            <div className="flex-1 h-px bg-gray-400/50"></div>
          </div>

          {/* Google Signup */}
          <button className="w-full mt-6 py-3 border border-white/40 bg-white/10 rounded-xl text-white font-medium hover:bg-white/20 transition flex items-center justify-center gap-3">
            <FaGoogle className="text-xl" />
            Continue with Google
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-300 mt-6">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-purple-400 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
