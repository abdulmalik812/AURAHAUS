import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import useReveal from '../hooks/useReveal';

export default function ProductGrid() {
  const ref = useReveal();
  // Show first 8 products (or featured subset)
  const featured = products.slice(0, 8);

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto reveal" ref={ref} id="products-section">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">Curated Selection</p>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-text-primary">OUR BESTSELLERS</h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {featured.map((product, i) => (
          <div key={product.id} style={{ animationDelay: `${i * 0.1}s` }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="text-center mt-14">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-bg px-8 py-3.5 rounded-full text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300"
          id="view-all-btn"
        >
          View All Products
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
