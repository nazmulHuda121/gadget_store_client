import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Tech Enthusiast',
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote:
      'These gadgets transformed my daily life. Quality and performance are top-notch!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Professional Photographer',
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote:
      'Absolutely amazing products! The customer service is also incredible.',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    role: 'Gadget Reviewer',
    imageUrl: 'https://randomuser.me/api/portraits/men/56.jpg',
    quote: 'Stylish, durable, and extremely functional. Highly recommended!',
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our <span className="text-purple-400">Clients Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-lg transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-white/20"
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={t.imageUrl}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-2 border-purple-400 object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{t.name}</h3>
                  <p className="text-purple-300 text-sm">{t.role}</p>
                </div>
              </div>

              <p className="text-gray-200 relative text-sm">
                <FaQuoteLeft className="absolute -top-4 -left-4 text-purple-400 text-xl" />
                {t.quote}
              </p>

              <div className="absolute inset-0 rounded-3xl border border-purple-500/10 group-hover:border-purple-400/40 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
