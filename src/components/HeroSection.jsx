'use client';

export function HeroSection({ imageUrl, extraImages = [] }) {
  // Default extra images (if none provided)
  const defaultImages = [
    'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1000',
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000',
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000',
  ];

  const imagesToShow = extraImages.length > 0 ? extraImages : defaultImages;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-28 text-center relative z-10">
        <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 animate-fadeInUp">
          Discover Next-Gen Gadgets
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4 animate-fadeInUp delay-150">
          Premium quality gadgets designed to enhance your lifestyle with modern
          innovation.
        </p>

        <button className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl text-lg font-semibold shadow-lg hover:opacity-90 transition animate-fadeInUp delay-300">
          Explore Products
        </button>

        {/* 🌟 Main Hero Image */}
        {imageUrl && (
          <div className="mt-14 mx-auto w-full max-w-xl animate-fadeInUp delay-300">
            <div className="relative group">
              <img
                src={imageUrl}
                alt="Hero Gadget"
                className="w-full rounded-3xl shadow-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 animate-floatSlow3"
              />
            </div>
          </div>
        )}

        {/* 🌈 Extra Animated Images Row */}
        <div className="mt-16 flex justify-center gap-6 flex-wrap">
          {imagesToShow.map((img, index) => (
            <div
              key={index}
              className={`relative w-40 h-40 rounded-2xl overflow-hidden shadow-xl
                ${index % 2 === 0 ? 'animate-slideLeft' : 'animate-slideRight'}
              `}
            >
              <img
                src={img}
                alt="Mini gadget"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Blobs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300/40 rounded-full blur-3xl animate-floatSlow"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300/40 rounded-full blur-3xl animate-floatSlow2"></div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
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
        @keyframes floatSlow3 {
          0% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-12px) scale(1.02);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        /* 🔥 Extra image animations */
        @keyframes slideLeft {
          0% {
            transform: translateX(50px) scale(0.95);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
        @keyframes slideRight {
          0% {
            transform: translateX(-50px) scale(0.95);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }

        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-floatSlow2 {
          animation: floatSlow2 7s ease-in-out infinite;
        }
        .animate-floatSlow3 {
          animation: floatSlow3 6s ease-in-out infinite;
        }

        .animate-slideLeft {
          animation: slideLeft 1s ease forwards;
        }
        .animate-slideRight {
          animation: slideRight 1s ease forwards;
        }
      `}</style>
    </section>
  );
}
