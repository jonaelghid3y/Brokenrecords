// Header.jsx
import React, { useContext } from 'react';
import Nav from './Nav';
import Cart from './Cart';
import { CartContext } from './CartContext';

const Header = () => {
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  return (
    <div id="headerdiv">
      <Nav cartLength={cart.length} cart={cart} />
    
    </div>
  )
}

export default Header;
