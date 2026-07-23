import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case 'price-high':
        result.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, sortBy, searchQuery]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Page Header */}
      <div className="text-center mb-12">
        <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">Collection</p>
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-text-primary">OUR MIRRORS</h1>
        <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2" id="category-filters">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-bg'
                  : 'border border-border text-text-secondary hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort + Search */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-48">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none focus:border-gold transition-colors"
              id="shop-search"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-secondary outline-none focus:border-gold transition-colors cursor-pointer appearance-none"
            id="shop-sort"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'8\' viewBox=\'0 0 12 8\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%23666\' stroke-width=\'1.5\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', paddingRight: '36px' }}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
            <option value="name">Name: A → Z</option>
          </select>
        </div>
      </div>

      {/* Product Count */}
      <p className="text-text-muted text-sm mb-6">
        Showing {filteredProducts.length} product{filteredProducts.length !== 1 && 's'}
        {activeCategory !== 'All' && <span> in <span className="text-gold">{activeCategory}</span></span>}
      </p>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-text-muted text-lg mb-2">No products found</p>
          <p className="text-text-muted text-sm">Try adjusting your filters or search query.</p>
          <button
            onClick={() => { setActiveCategory('All'); setSearchQuery(''); setSortBy('featured'); }}
            className="mt-6 text-gold hover:text-gold-light text-sm font-semibold uppercase tracking-wider transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
