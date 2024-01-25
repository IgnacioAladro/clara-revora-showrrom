import {createContext, useState, useContext} from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ value = [], children }) => {
    const [count, setCount] = useState(0);

    return (
        <CartContext.Provider value={{count, setCount}}>
            {children}
        </CartContext.Provider>
    )

};