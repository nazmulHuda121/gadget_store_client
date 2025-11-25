import ProductCard from '@/components/ProductCard';

export default async function Products() {
  const res = await fetch(`http://localhost:5000/products`);
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
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
