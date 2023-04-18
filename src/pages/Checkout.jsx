import React, { useContext } from 'react';
import Cart from '../components/Cart';
import { CartContext } from '../components/CartContext';

const Checkout = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Cart cart={cart} />
    </>
  )
}

export default Checkout;
