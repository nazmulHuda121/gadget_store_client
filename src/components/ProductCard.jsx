'use client';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa';

export default function ProductCard({ product }) {
  return (
    <div className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-lg transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-white/20">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-52 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-2xl font-bold text-white mt-5 transition-colors duration-300 group-hover:text-blue-400">
        {product.title}
      </h3>
      <p className="text-gray-300 text-sm mt-3 line-clamp-2">
        {product.shortDesc}
      </p>
      <div className="flex justify-between items-center mt-5">
        <p className="text-blue-400 font-bold text-lg">${product.price}</p>
        <Link href={`/products/${product._id}`}>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all text-white px-4 py-2 rounded-xl shadow-lg">
            <FaEye /> View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
