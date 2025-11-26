import ProtectedRoute from '@/components/ProtectedRoute';
import { SlEnergy } from 'react-icons/sl';
import { BsCalendarDate } from 'react-icons/bs';

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/products/${id}`, {
    cache: 'no-store',
  });

  const product = await res.json();

  return (
    <div
      className="min-h-screen py-16 px-4 flex justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1468495244123-6c6c332eeece?q=80&w=1621&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="max-w-5xl w-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-10 animate-fadeIn">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-8 text-center">
          {product.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-[420px] object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Product Info */}
          <div className="text-gray-300 space-y-6">
            {/* Price */}
            <p className="text-4xl font-bold text-blue-400">
              Price: ${product.price}
            </p>

            {/* Short Description */}
            <p className="text-lg leading-relaxed text-gray-300">
              {product.shortDesc}
            </p>

            {/* Full Description */}
            <div className="bg-black/40 border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                About This Product
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {product.fullDesc}
              </p>
            </div>

            {/* Additional Info */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1">
                <BsCalendarDate />

                <p className="text-gray-300">
                  <span className="font-medium text-white">Added On:</span>{' '}
                  {product.date}
                </p>
              </div>

              <p className="text-gray-300">
                <div className="flex items-center gap-0.5">
                  <SlEnergy />
                  <span className="font-medium text-white">Priority:</span>{' '}
                  <span
                    className={`ml-2 px-3 py-1 rounded-full text-sm font-semibold ${
                      product.priority === 'high'
                        ? 'bg-red-600 text-white'
                        : product.priority === 'medium'
                        ? 'bg-yellow-500 text-black'
                        : 'bg-green-500 text-black'
                    }`}
                  >
                    {product.priority}
                  </span>
                </div>
              </p>
            </div>

            {/* Button */}
            <button className="w-full mt-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:opacity-90 transition tracking-wide">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.7s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
