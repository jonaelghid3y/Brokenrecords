import React, { useContext } from 'react';
import Cart from '../components/Cart';
import { CartContext } from '../components/CartContext';
import { useState } from 'react';

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext); // Get cart and setCart from CartContext
  const [updatecart, setupdateCart] = useState([]);

  return (
    <>
      <Cart cart={cart} updatecart={updatecart} setupdateCart={setupdateCart} />
    </>
  )
}

export default Checkout;
