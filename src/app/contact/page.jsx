'use client';

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useState } from 'react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const contactData = { name, email, message };

    const res = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactData),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'We will get back to you soon.',
        timer: 1500,
        showConfirmButton: false,
      });
      e.target.reset();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Failed',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat pt-32 pb-16 px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515940175183-6798529cb860?q=80&w=2829&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="bg-black/60 backdrop-blur-2xl max-w-5xl mx-auto rounded-3xl p-10 shadow-2xl border border-white/20">
        <h1 className="text-5xl font-bold text-white text-center mb-10 tracking-tight">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 text-gray-200">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Get in Touch
              </h3>
              <p className="leading-relaxed">
                Have questions? Want to collaborate? Feel free to reach out
                anytime!
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-400 text-3xl" />
              <div>
                <h4 className="font-semibold text-white text-lg">Address</h4>
                <p>Mirpur, Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-blue-400 text-2xl" />
              <div>
                <h4 className="font-semibold text-white text-lg">Phone</h4>
                <p>+880 1700 000000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-blue-400 text-2xl" />
              <div>
                <h4 className="font-semibold text-white text-lg">Email</h4>
                <p>support@gadgetstore.com</p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-white font-medium">Your Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full mt-2 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-white font-medium">Your Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full mt-2 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-white font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full mt-2 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <button
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl hover:opacity-90 transition shadow-lg"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
