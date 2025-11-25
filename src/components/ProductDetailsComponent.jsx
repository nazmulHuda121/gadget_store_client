'use client';
import { FaDollarSign } from 'react-icons/fa';

export default function ProductDetailsComponent({ product }) {
  return (
    <div className="max-w-5xl mx-auto p-10 mt-10 bg-white/10 backdrop-blur-lg rounded-3xl shadow-lg">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-96 object-cover rounded-2xl mb-6"
      />
      <h1 className="text-4xl font-bold text-white mb-4">{product.title}</h1>
      <p className="text-gray-300 mb-4">{product.fullDesc}</p>
      <div className="flex items-center gap-4 text-blue-400 font-semibold text-xl">
        <FaDollarSign /> ${product.price}
      </div>
    </div>
  );
}
