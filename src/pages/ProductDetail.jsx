import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const { addToCart } = useCart();

  const product = useMemo(() => products.find(p => p.slug === slug), [slug]);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  const [added, setAdded] = useState(false);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(p => p.id !== product.id && p.category === product.category)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center min-h-screen">
        <h1 className="font-heading text-4xl text-text-primary mb-4">Product Not Found</h1>
        <p className="text-text-muted mb-6">The product you&apos;re looking for doesn&apos;t exist.</p>
        <Link to="/shop" className="btn-gold px-8 py-3 rounded-full text-sm uppercase tracking-wider font-semibold">
          Back to Shop
        </Link>
      </div>
    );
  }

  const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

  const handleAddToCart = () => {
    addToCart(product, selectedSize || product.sizes[0], quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const tabs = [
    { id: 'details', label: 'Details' },
    { id: 'shipping', label: 'Shipping' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-text-muted mb-8">
        <Link to="/" className="hover:text-gold transition-colors">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
        <span>/</span>
        <span className="text-text-secondary">{product.name}</span>
      </nav>

      {/* Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square overflow-hidden rounded-2xl bg-bg-elevated relative group">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {product.badge && (
              <span className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white ${
                product.badge === 'Sale' ? 'bg-sale' : product.badge === 'New' ? 'bg-gold text-bg' : 'bg-purple-600'
              }`}>
                {product.badge}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  selectedImage === i ? 'border-gold' : 'border-border hover:border-text-muted'
                }`}
              >
                <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-2">{product.category}</p>
          <h1 className="font-heading text-4xl sm:text-5xl text-text-primary mb-4">{product.name.toUpperCase()}</h1>

          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            {product.salePrice ? (
              <>
                <span className="text-gold font-heading text-3xl">{formatPrice(product.salePrice)}</span>
                <span className="text-text-muted line-through text-lg">{formatPrice(product.price)}</span>
                <span className="bg-sale/20 text-sale text-xs font-semibold px-3 py-1 rounded-full">
                  SAVE {formatPrice(product.price - product.salePrice)}
                </span>
              </>
            ) : (
              <span className="text-text-primary font-heading text-3xl">{formatPrice(product.price)}</span>
            )}
          </div>

          <p className="text-text-secondary leading-relaxed mb-8">{product.description}</p>

          {/* Size Selector */}
          <div className="mb-6">
            <label className="text-sm text-text-secondary uppercase tracking-wider font-medium mb-3 block">
              Size
            </label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                    (selectedSize || product.sizes[0]) === size
                      ? 'bg-gold text-bg font-semibold'
                      : 'border border-border text-text-secondary hover:border-gold hover:text-gold'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="text-sm text-text-secondary uppercase tracking-wider font-medium mb-3 block">
              Quantity
            </label>
            <div className="inline-flex items-center border border-border rounded-lg">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-12 h-12 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors text-lg"
              >
                −
              </button>
              <span className="w-12 h-12 flex items-center justify-center font-medium border-x border-border">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-12 h-12 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-4 rounded-xl font-semibold text-sm uppercase tracking-[0.2em] transition-all duration-300 ${
              added
                ? 'bg-success text-white'
                : 'btn-gold'
            }`}
            id="add-to-cart-btn"
          >
            {added ? '✓ Added to Cart!' : 'Add to Cart'}
          </button>

          {/* Trust Signals */}
          <div className="flex items-center gap-6 mt-6 text-text-muted text-xs">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/><rect x="1" y="3" width="15" height="13" rx="2"/></svg>
              Free Shipping
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>
              Easy Returns
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Secure Checkout
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-20 border-t border-border">
        <div className="flex gap-0 border-b border-border">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm uppercase tracking-wider font-medium transition-colors duration-300 border-b-2 -mb-[1px] ${
                activeTab === tab.id
                  ? 'border-gold text-gold'
                  : 'border-transparent text-text-muted hover:text-text-secondary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="py-8">
          {activeTab === 'details' && product.details && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {Object.entries(product.details).map(([key, value]) => (
                <div key={key} className="flex gap-4">
                  <span className="text-text-muted text-sm capitalize w-24 flex-shrink-0">{key}</span>
                  <span className="text-text-secondary text-sm">{value}</span>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'shipping' && (
            <div className="space-y-3 text-text-secondary text-sm max-w-2xl">
              <p>Free shipping on all orders over ₹999.</p>
              <p>Standard shipping (3–7 business days): ₹99</p>
              <p>Express shipping (1–3 business days): ₹249</p>
              <p>We currently ship across India. International shipping coming soon.</p>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className="text-center py-8">
              <p className="text-text-muted">No reviews yet. Be the first to review this product!</p>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-20">
          <div className="text-center mb-10">
            <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">You May Also Like</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-text-primary">RELATED PRODUCTS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
