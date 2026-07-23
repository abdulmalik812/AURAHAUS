import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';

export default function SearchOverlay() {
  const { query, setQuery, results, isSearchOpen, closeSearch } = useSearch();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') closeSearch(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeSearch]);

  const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 z-50 transition-opacity duration-300 ${
          isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSearch}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-bg-card border-b border-border transition-transform duration-400 ease-out ${
          isSearchOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        id="search-overlay"
      >
        <div className="max-w-3xl mx-auto p-6">
          <div className="flex items-center gap-4 mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted flex-shrink-0">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search mirrors..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-text-primary text-lg font-light placeholder-text-muted"
              id="search-input"
            />
            <button
              onClick={closeSearch}
              className="text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Close search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Results */}
          {query.trim() && (
            <div className="border-t border-border pt-4 max-h-80 overflow-y-auto">
              {results.length === 0 ? (
                <p className="text-text-muted text-center py-8">No results for &ldquo;{query}&rdquo;</p>
              ) : (
                <div className="space-y-3">
                  <p className="text-text-muted text-xs uppercase tracking-wider">{results.length} result{results.length !== 1 && 's'}</p>
                  {results.map(product => (
                    <Link
                      key={product.id}
                      to={`/product/${product.slug}`}
                      onClick={closeSearch}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-bg-hover transition-colors group"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-14 h-14 object-cover rounded-md bg-bg-elevated"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-text-primary group-hover:text-gold transition-colors truncate">
                          {product.name}
                        </p>
                        <p className="text-xs text-text-muted">{product.category}</p>
                      </div>
                      <p className="text-gold font-semibold text-sm">
                        {formatPrice(product.salePrice || product.price)}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
