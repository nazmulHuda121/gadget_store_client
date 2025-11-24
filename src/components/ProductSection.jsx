import { FaEye } from 'react-icons/fa';

export default async function ProductSection() {
  // Fetch data from backend
  const res = await fetch('http://localhost:5000/products');
  const data = await res.json();
  const products = data.result.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0F1F] to-[#654929]">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Featured <span className="text-blue-400">Products</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product._id}
              className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-lg transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-white/20"
            >
              {/* Product Image */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-52 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Product Title */}
              <h3 className="text-2xl font-bold text-white mt-5 transition-colors duration-300 group-hover:text-blue-400">
                {product.title}
              </h3>

              {/* Short Description */}
              <p className="text-gray-300 text-sm mt-3 line-clamp-2">
                {product.shortDesc}
              </p>

              {/* Price / Meta */}
              <div className="flex justify-between items-center mt-5">
                <p className="text-blue-400 font-bold text-lg">
                  ${product.price}
                </p>

                {/* View Details Button */}
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all text-white px-4 py-2 rounded-xl shadow-lg cursor-pointer">
                  <FaEye />
                  View Details
                </button>
              </div>

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-3xl border border-blue-500/10 group-hover:border-blue-400/40 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
