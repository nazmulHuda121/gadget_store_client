'use client';
import { FaMobileAlt, FaLaptop, FaHeadphones, FaClock } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaMobileAlt className="text-4xl text-blue-500" />,
    title: 'Smartphone Repair',
    desc: 'Fast and reliable smartphone repair service for all brands and models.',
  },
  {
    id: 2,
    icon: <FaLaptop className="text-4xl text-purple-500" />,
    title: 'Laptop Diagnostics',
    desc: 'Professional laptop diagnostics and optimization to boost performance.',
  },
  {
    id: 3,
    icon: <FaHeadphones className="text-4xl text-green-500" />,
    title: 'Audio & Accessories',
    desc: 'High-quality audio equipment checkup, repair, and setup for your devices.',
  },
  {
    id: 4,
    icon: <FaClock className="text-4xl text-yellow-400" />,
    title: 'Fast Delivery',
    desc: 'Get your repaired gadgets delivered quickly and safely to your doorstep.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-purple-900 py-16 lg:py-36 px-4">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Our <span className="text-blue-500">Services</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          We offer a wide range of tech services for gadgets, laptops, and smart
          devices. Quality, speed, and reliability are our top priorities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition">
              {service.title}
            </h3>
            <p className="text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
          What Our <span className="text-purple-500">Clients Say</span>
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Customers love our gadgets and services. Here’s what they have to say
          about us.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Alice Rahman',
              review:
                'Absolutely amazing service! My laptop repair was fast and professional. Highly recommend!',
              img: 'https://randomuser.me/api/portraits/women/65.jpg',
            },
            {
              name: 'Imran Hossain',
              review:
                'Superb experience! Friendly staff and quick turnaround. My smartphone works like new!',
              img: 'https://randomuser.me/api/portraits/men/32.jpg',
            },
            {
              name: 'Nadia Karim',
              review:
                'Top-notch service center! Very satisfied with the repairs and customer support.',
              img: 'https://randomuser.me/api/portraits/women/44.jpg',
            },
          ].map((client, i) => (
            <div
              key={i}
              className="relative bg-gradient-to-br from-purple-700/40 to-blue-600/30 backdrop-blur-xl border border-white/20 rounded-3xl p-6 flex flex-col items-center text-center shadow-lg hover:-translate-y-4 hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute -top-10 w-20 h-20 rounded-full overflow-hidden border-4 border-purple-500">
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 mx-auto text-purple-400 mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.17 6A5.002 5.002 0 0 0 2 11v4a3 3 0 0 0 3 3h2v-7H3v-1a3 3 0 0 1 3-3h1.17zm10 0A5.002 5.002 0 0 0 12 11v4a3 3 0 0 0 3 3h2v-7h-4v-1a3 3 0 0 1 3-3h1.17z" />
                </svg>
                <p className="text-gray-200 italic mb-4">{client.review}</p>
                <h3 className="text-white font-bold text-lg">{client.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
