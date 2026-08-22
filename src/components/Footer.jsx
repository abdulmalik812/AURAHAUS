import { Link } from 'react-router-dom';
import Logo from './Logo';

const explore = [
  { to: '/shop', label: 'Shop all mirrors' },
  { to: '/shop?category=Wall+Mirrors', label: 'Wall mirrors' },
  { to: '/shop?category=LED+Mirrors', label: 'LED mirrors' },
  { to: '/custom', label: 'Custom order' },
];

const about = [
  { to: '/about', label: 'Our story' },
  { to: '/contact', label: 'Contact us' },
  { to: '/contact', label: 'Shipping & returns' },
];

export default function Footer() {
  return (
    <footer id="site-footer" className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" aria-label="AuraHaus home"><Logo size="default" /></Link>
          <p>Handcrafted mirrors for beautifully lived-in spaces.</p>
          <a className="footer-instagram" href="#" aria-label="AuraHaus on Instagram">Instagram <span>↗</span></a>
        </div>

        <nav className="footer-nav" aria-label="Shop links">
          <p className="footer-label">Explore</p>
          {explore.map(link => <Link key={link.to + link.label} to={link.to}>{link.label}</Link>)}
        </nav>

        <nav className="footer-nav" aria-label="Information links">
          <p className="footer-label">About AuraHaus</p>
          {about.map(link => <Link key={link.label} to={link.to}>{link.label}</Link>)}
        </nav>

        <div className="footer-note">
          <p className="footer-label">Made with care</p>
          <p>Designed and handcrafted in India. Each piece is made to order with attention to the details that make a room feel like home.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AuraHaus</p>
        <p>Secure payments · Pan-India delivery</p>
      </div>
    </footer>
  );
}
