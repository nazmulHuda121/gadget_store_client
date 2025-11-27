'use client';

import { FaGoogle } from 'react-icons/fa';
import Link from 'next/link';
import { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/AuthProvider/AuthContext';
import Swal from 'sweetalert2';

export default function LoginPage() {
  const { loginUser, logedInWithGoogle } = use(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Email/Password login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        showConfirmButton: false,
        timer: 1500,
      });
      router.push('/');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.message,
      });
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      await logedInWithGoogle();
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        showConfirmButton: false,
        timer: 1500,
      });
      router.push('/');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Google Login Failed',
        text: error.message,
      });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-black/60 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-md border border-white/20">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-white drop-shadow-xl mb-8">
          Welcome Back
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-5">
            <label className="text-white font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-white font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold text-lg hover:opacity-90 transition">
            Login
          </button>
        </form>

        {/* Or divider */}
        <div className="mt-6 flex items-center gap-3 text-gray-300">
          <div className="flex-1 h-px bg-gray-400/50"></div>
          <span>OR</span>
          <div className="flex-1 h-px bg-gray-400/50"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full mt-6 py-3 border border-white/40 bg-white/10 rounded-xl text-white font-medium hover:bg-white/20 transition flex items-center justify-center gap-3"
        >
          <FaGoogle className="text-xl" />
          Continue with Google
        </button>

        {/* Register */}
        <p className="text-center text-gray-300 mt-6">
          Don’t have an account?{' '}
          <Link
            href="/register"
            className="text-blue-400 font-semibold hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
