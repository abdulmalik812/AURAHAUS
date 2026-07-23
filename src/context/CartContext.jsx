import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.size === action.payload.size
      );
      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + (action.payload.quantity || 1)
        };
        return { ...state, items: newItems };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }]
      };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(
          item => !(item.id === action.payload.id && item.size === action.payload.size)
        )
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.size === action.payload.size
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        )
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = useCallback((product, size, quantity = 1) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.salePrice || product.price,
        image: product.images[0],
        size: size || product.sizes?.[0] || 'One Size',
        quantity
      }
    });
  }, []);

  const removeFromCart = useCallback((id, size) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id, size } });
  }, []);

  const updateQuantity = useCallback((id, size, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, size, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const cartCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems: state.items,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
