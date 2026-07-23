import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const badgeColors = {
    Sale: 'bg-sale',
    New: 'bg-gold text-bg',
    Custom: 'bg-purple-600',
  };

  return (
    <div className="product-card group relative" id={`product-card-${product.id}`}>
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden rounded-xl bg-bg-elevated mb-4">
          {/* Primary Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-card-image product-card-image-primary absolute inset-0 w-full h-full object-cover"
          />
          {/* Secondary Image (hover) */}
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className="product-card-image product-card-image-secondary absolute inset-0 w-full h-full object-cover opacity-0"
          />

          {/* Badge */}
          {product.badge && (
            <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white ${badgeColors[product.badge] || 'bg-gold'}`}>
              {product.badge}
            </span>
          )}

          {/* Quick Add to Cart */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <button
              onClick={handleAddToCart}
              className={`w-full py-3 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                added
                  ? 'bg-success text-white'
                  : 'btn-gold'
              }`}
            >
              {added ? '✓ Added!' : 'Quick Add'}
            </button>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Info */}
        <div className="px-1">
          <p className="text-xs text-text-muted uppercase tracking-wider mb-1">{product.category}</p>
          <h3 className="text-text-primary font-medium text-sm sm:text-base group-hover:text-gold transition-colors duration-300 line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-1.5">
            {product.salePrice ? (
              <>
                <span className="text-gold font-semibold">{formatPrice(product.salePrice)}</span>
                <span className="text-text-muted line-through text-sm">{formatPrice(product.price)}</span>
                <span className="text-sale text-xs font-semibold">
                  {Math.round((1 - product.salePrice / product.price) * 100)}% OFF
                </span>
              </>
            ) : (
              <span className="text-text-primary font-semibold">{formatPrice(product.price)}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
