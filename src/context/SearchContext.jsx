import { createContext, useContext, useState, useMemo } from 'react';
import { products } from '../data/products';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [query, setQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <SearchContext.Provider value={{
      query,
      setQuery,
      results,
      isSearchOpen,
      setIsSearchOpen,
      openSearch: () => setIsSearchOpen(true),
      closeSearch: () => { setIsSearchOpen(false); setQuery(''); }
    }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) throw new Error('useSearch must be used within SearchProvider');
  return context;
}
