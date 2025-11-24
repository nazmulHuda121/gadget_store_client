'use client';

import { MdLocalShipping, MdHighQuality, MdSupportAgent } from 'react-icons/md';

export function FeaturesSection() {
  const features = [
    {
      title: 'Fast Delivery',
      desc: 'Your products delivered within days.',
      icon: <MdLocalShipping className="text-5xl text-purple-600" />,
    },
    {
      title: 'Premium Quality',
      desc: 'Only top-notch certified gadgets.',
      icon: <MdHighQuality className="text-5xl text-blue-600" />,
    },
    {
      title: 'Best Support',
      desc: '24/7 customer care assistance.',
      icon: <MdSupportAgent className="text-5xl text-pink-600" />,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-100 to-blue-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3 border border-white/40"
            >
              {/* Icon */}
              <div className="mb-6 animate-fadeIn">{f.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{f.desc}</p>

              {/* Gradient glow behind icon */}
              <div className="absolute -top-10 w-28 h-28 rounded-full bg-gradient-to-tr from-purple-400 to-blue-400 opacity-30 blur-3xl -z-10"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
}
