import React, { useContext } from 'react';
import Cart from '../components/Cart';
import { CartContext } from '../components/CartContext';

const Checkout = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout Page</h1>
      <Cart cart={cart} />
    </div>
  )
}

export default Checkout;
