'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (!res.error) {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <form className="bg-gray-800 p-10 rounded-xl max-w-sm w-full">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Login
        </h2>

        <input
          className="w-full p-3 rounded mb-4 bg-gray-700 text-white"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="w-full p-3 rounded mb-4 bg-gray-700 text-white"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 p-3 rounded text-white"
        >
          Login
        </button>

        <button
          onClick={() => signIn('google')}
          className="w-full bg-red-500 mt-4 p-3 rounded text-white"
        >
          Login with Google
        </button>
      </form>
    </div>
  );
}
