'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCredentialsLogin = async (e) => {
    e.preventDefault();
    await signIn('credentials', {
      email,
      password,
      callbackUrl: '/',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 px-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleCredentialsLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-200 my-4">OR</p>

        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"
        >
          Login with Google
        </button>

        <p className="text-center text-white mt-4">
          Dont have an account?
          <Link href="/register" className="text-blue-400 ml-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
