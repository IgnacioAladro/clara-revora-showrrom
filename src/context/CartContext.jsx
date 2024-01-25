import {createContext, useState, useContext} from 'react';

const CartContext = createContext();

export const useCartContext = () => {return useContext(CartContext)};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (product, quantity) => {
    const newItem = { ...product, quantity };
    setCart([...cart, newItem]);
  };

  const removeItemFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

/* export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ value = [], children }) => {
    const [count, setCount] = useState(0);

    return (
        <CartContext.Provider value={{count, setCount}}>
            {children}
        </CartContext.Provider>
    )

}; */