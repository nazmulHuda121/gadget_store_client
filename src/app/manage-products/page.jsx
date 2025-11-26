'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';
import Swal from 'sweetalert2';
import ProtectedRoute from '@/components/ProtectedRoute';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  // Fetch all products
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.result))
      .catch((err) => console.error(err));
  }, []);

  // Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes! Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${id}`, { method: 'DELETE' })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Product has been deleted.',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
              });
              setProducts(products.filter((p) => p._id !== id));
            }
          });
      }
    });
  };

  const handleView = (id) => {
    router.push(`/products/${id}`);
  };

  return (
    <ProtectedRoute>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat px-4 py-20 lg:py-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1752448633225-d3ec2128851f?auto=format&fit=crop&q=80&w=2070')`,
        }}
      >
        <div className="bg-gray-900/80 backdrop-blur-md p-4 sm:p-8 rounded-3xl shadow-2xl max-w-6xl mx-auto text-white">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-400 mb-10 sm:mb-12 drop-shadow-lg">
            Manage Products
          </h2>

          {products.length === 0 ? (
            <Loading />
          ) : (
            <div className="overflow-x-auto w-full">
              <table className="min-w-full border border-blue-700 rounded-xl text-white">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-700 text-white text-sm sm:text-base">
                  <tr>
                    <th className="py-3 px-2 sm:px-4 text-left">Name</th>
                    <th className="py-3 px-2 sm:px-4 text-left">Product img</th>
                    <th className="py-3 px-2 sm:px-4 text-left">Price</th>
                    <th className="py-3 px-2 sm:px-4 text-left">Priority</th>
                    <th className="py-3 px-2 sm:px-4 text-left">Date</th>
                    <th className="py-3 px-2 sm:px-4 text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((p) => (
                    <tr
                      key={p._id}
                      className="border-t border-blue-700 hover:bg-white/10 transition text-sm sm:text-base"
                    >
                      {/* Name */}
                      <td className="py-3 px-2 sm:px-4 font-semibold text-purple-300">
                        {p.title}
                      </td>

                      {/* Image */}
                      <td className="py-3 px-2 sm:px-4">
                        <img
                          src={p.imageUrl}
                          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded hover:scale-110 transition-transform"
                        />
                      </td>

                      {/* Price */}
                      <td className="py-3 px-2 sm:px-4">${p.price}</td>

                      {/* Priority */}
                      <td className="py-3 px-2 sm:px-4">{p.priority}</td>

                      {/* Date */}
                      <td className="py-3 px-2 sm:px-4">
                        {new Date(p.date).toLocaleDateString()}
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-2 sm:px-4">
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-3">
                          <button
                            onClick={() => handleView(p._id)}
                            className="lg:text-[16px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg text-sm transition cursor-pointer"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleDelete(p._id)}
                            className="lg:text-[16px] bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default ManageProducts;
