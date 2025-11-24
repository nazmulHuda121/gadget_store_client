'use client';

export default function BannerSection() {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1581092338800-18d0d96a9df7?q=80&w=1400')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Upgrade Your Tech Today
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Discover premium gadgets that make your life smarter and more fun.
        </p>
        <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition transform hover:-translate-y-1">
          Shop Now
        </button>
      </div>
      {/* Floating shapes / animation */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-400/30 rounded-full blur-3xl animate-floatSlow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl animate-floatSlow2"></div>
      <style jsx>{`
        @keyframes floatSlow {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes floatSlow2 {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(25px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-floatSlow2 {
          animation: floatSlow2 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
