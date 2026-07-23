import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-bg-card border-t border-border" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
              <Logo size="default" />
            </Link>
            <p className="text-text-secondary text-sm mt-4 leading-relaxed max-w-xs">
              Crafting premium aesthetic mirrors that transform spaces and define style. Handmade in India with love.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold transition-all duration-300" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold transition-all duration-300" aria-label="Pinterest">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold transition-all duration-300" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Main Menu */}
          <div>
            <h3 className="font-heading text-lg tracking-wider mb-6 text-text-primary">MAIN MENU</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/shop', label: 'Catalog' },
                { to: '/shop?category=Custom+Mirrors', label: 'Custom' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.to + link.label}>
                  <Link to={link.to} className="text-text-secondary hover:text-gold text-sm transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-heading text-lg tracking-wider mb-6 text-text-primary">SHOP</h3>
            <ul className="space-y-3">
              {[
                { to: '/shop', label: 'All Products' },
                { to: '/shop?category=Wall+Mirrors', label: 'Wall Mirrors' },
                { to: '/shop?category=LED+Mirrors', label: 'LED Mirrors' },
                { to: '/shop?category=Decorative', label: 'Decorative' },
                { to: '/shop?category=Custom+Mirrors', label: 'Custom Mirrors' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-text-secondary hover:text-gold text-sm transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-heading text-lg tracking-wider mb-6 text-text-primary">INFO</h3>
            <ul className="space-y-3">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact Us' },
                { to: '#', label: 'Shipping Policy' },
                { to: '#', label: 'Refund Policy' },
                { to: '#', label: 'Terms of Service' },
                { to: '#', label: 'Privacy Policy' },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-text-secondary hover:text-gold text-sm transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & Copyright */}
        <div className="border-t border-border py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'UPI', 'Paytm', 'GPay'].map(method => (
              <div
                key={method}
                className="bg-bg-elevated border border-border rounded-md px-3 py-1.5 text-[10px] text-text-muted font-medium uppercase tracking-wider"
              >
                {method}
              </div>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} AuraHaus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
