'use client';

export function HeroSection({ imageUrl, extraImages = [] }) {
  const imagesToShow = extraImages.length > 0 ? extraImages : defaultImages;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        animation: 'bgMove 25s ease-in-out infinite',
      }}
    >
      <div className="backdrop-blur-sm bg-white/20">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center relative z-10">
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600 animate-fadeInUp">
            Discover Next-Gen Gadgets
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4 animate-fadeInUp delay-150">
            Premium quality gadgets designed to enhance your lifestyle with
            modern innovation.
          </p>

          <button className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl text-lg font-semibold shadow-lg hover:opacity-90 transition animate-fadeInUp delay-300 hover:scale-110 cursor-pointer">
            Explore Products
          </button>

          {/* Extra Animated Images */}
          <div className="mt-16 flex justify-center gap-6 flex-wrap">
            {imagesToShow.map((img, index) => (
              <div
                key={index}
                className={`relative w-40 h-40 rounded-2xl overflow-hidden shadow-xl
                  ${
                    index % 2 === 0 ? 'animate-slideLeft' : 'animate-slideRight'
                  }
                `}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover cursor-pointer hover:scale-150"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Blobs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300/40 rounded-full blur-3xl animate-floatSlow"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300/40 rounded-full blur-3xl animate-floatSlow2"></div>

      {/* All Animations */}
      <style jsx>{`
        @keyframes bgMove {
          0% {
            background-size: 100%;
            background-position: center;
          }
          50% {
            background-size: 105%;
            background-position: top;
          }
          100% {
            background-size: 100%;
            background-position: center;
          }
        }

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
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes floatSlow2 {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(25px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes floatSlow3 {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-12px) scale(1.02);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideLeft {
          0% {
            transform: translateX(50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideLeft {
          animation: slideLeft 1s ease forwards;
        }
        .animate-slideRight {
          animation: slideRight 1s ease forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .animate-floatSlow {
          animation: floatSlow 6s infinite ease-in-out;
        }
        .animate-floatSlow2 {
          animation: floatSlow2 7s infinite ease-in-out;
        }
        .animate-floatSlow3 {
          animation: floatSlow3 6s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
