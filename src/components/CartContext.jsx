import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((p) => p._id === product._id);
    if (existingProductIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;