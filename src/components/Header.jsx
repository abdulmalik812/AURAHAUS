import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import MobileNav from './MobileNav';
import CartDrawer from './CartDrawer';
import SearchOverlay from './SearchOverlay';
import Logo from './Logo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartCount } = useCart();
  const { openSearch } = useSearch();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=Custom+Mirrors', label: 'Custom' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-bg/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.5)] py-3'
            : 'bg-transparent py-5'
        }`}
        style={{ top: scrolled ? '0' : '36px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-text-primary hover:text-gold transition-colors p-1"
            aria-label="Open menu"
            id="mobile-menu-btn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center group hover:opacity-90 transition-opacity duration-300" id="logo-link">
            <Logo size="default" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
            {navLinks.map(link => (
              <Link
                key={link.to + link.label}
                to={link.to}
                className={`text-sm uppercase tracking-[0.2em] font-medium transition-colors duration-300 hover:text-gold ${
                  location.pathname === link.to ? 'text-gold' : 'text-text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              onClick={openSearch}
              className="text-text-secondary hover:text-gold transition-colors p-1"
              aria-label="Search"
              id="search-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Account */}
            <button
              className="hidden sm:block text-text-secondary hover:text-gold transition-colors p-1"
              aria-label="Account"
              id="account-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative text-text-secondary hover:text-gold transition-colors p-1"
              aria-label="Cart"
              id="cart-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-bg text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse-gold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchOverlay />
    </>
  );
}
