'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

export default function AddProduct() {
  const [form, setForm] = useState({
    title: '',
    shortDesc: '',
    fullDesc: '',
    price: '',
    date: '',
    priority: 'medium',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.shortDesc || !form.fullDesc || !form.price) {
      toast.error('Please fill all required fields!');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Product added to MongoDB!');
        setForm({
          title: '',
          shortDesc: '',
          fullDesc: '',
          price: '',
          date: '',
          priority: 'medium',
          imageUrl: '',
        });
      } else {
        toast.error('Failed to add product!');
      }
    } catch (error) {
      toast.error('Server error!');
      console.log(error);
    }
  };

  return (
    <div
      className=" mx-auto px-6 py-16 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1200')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-3xl backdrop-blur-xl bg-white/10 shadow-2xl p-10 rounded-2xl border border-white/30">
        <h1 className="text-4xl font-bold text-white mb-10 text-center drop-shadow-lg">
          Add New Product
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-5">
            <label className="block mb-1 font-semibold text-white">
              Title *
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border text-black bg-white/70 focus:ring-2 focus:ring-purple-500"
              placeholder="Product title"
            />
          </div>

          {/* Short Description */}
          <div className="mb-5">
            <label className="block mb-1 font-semibold text-white">
              Short Description *
            </label>
            <input
              name="shortDesc"
              value={form.shortDesc}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border text-black bg-white/70 focus:ring-2 focus:ring-purple-500"
              placeholder="Short description"
            />
          </div>

          {/* Full Description */}
          <div className="mb-5">
            <label className="block mb-1 font-semibold text-white">
              Full Description *
            </label>
            <textarea
              name="fullDesc"
              value={form.fullDesc}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border text-black bg-white/70 h-32 focus:ring-2 focus:ring-purple-500"
              placeholder="Full product details..."
            ></textarea>
          </div>

          {/* Price */}
          <div className="mb-5">
            <label className="block mb-1 font-semibold text-white">
              Price *
            </label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border text-black bg-white/70 focus:ring-2 focus:ring-purple-500"
              placeholder="Product price"
            />
          </div>

          {/* Date */}
          <div className="mb-5">
            <label className="block mb-1 font-semibold text-white">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border text-black bg-white/70 focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Priority */}
          <div className="mb-5">
            <label className="block mb-1 font-semibold text-white">
              Priority
            </label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border text-black bg-white/70 focus:ring-2 focus:ring-purple-500"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          {/* Image URL */}
          <div className="mb-5">
            <label className="block mb-1 font-semibold text-white">
              Image URL
            </label>
            <input
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border text-black bg-white/70 focus:ring-2 focus:ring-purple-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-lg shadow-lg transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
