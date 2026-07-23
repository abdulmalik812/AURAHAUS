import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, cartCount, cartTotal, removeFromCart, updateQuantity } = useCart();

  const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-bg-card z-50 transition-transform duration-400 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="cart-drawer"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-heading text-2xl tracking-wider">
            YOUR CART <span className="text-gold">({cartCount})</span>
          </h2>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close cart"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-text-muted mb-4">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <p className="text-text-muted text-lg mb-2">Your cart is empty</p>
              <p className="text-text-muted text-sm mb-6">Looks like you haven&apos;t added any mirrors yet.</p>
              <button
                onClick={onClose}
                className="btn-gold px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4 pb-6 border-b border-border-subtle"
                >
                  {/* Image */}
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={onClose}
                    className="w-20 h-20 rounded-lg overflow-hidden bg-bg-elevated flex-shrink-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={onClose}
                      className="text-sm font-medium text-text-primary hover:text-gold transition-colors line-clamp-1"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-text-muted mt-1">{item.size}</p>
                    <p className="text-gold font-semibold text-sm mt-1">{formatPrice(item.price)}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-border rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors text-sm"
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        <span className="w-7 h-7 flex items-center justify-center text-xs font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors text-sm"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-text-muted hover:text-sale transition-colors text-xs underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-border bg-bg-elevated">
            <div className="flex items-center justify-between mb-4">
              <span className="text-text-secondary uppercase text-sm tracking-wider">Subtotal</span>
              <span className="text-gold font-heading text-2xl">{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-text-muted text-xs mb-4">Shipping & taxes calculated at checkout.</p>
            <button className="btn-gold w-full py-4 rounded-lg font-semibold text-sm uppercase tracking-wider">
              Proceed to Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full text-center text-text-secondary hover:text-gold text-sm mt-3 py-2 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
