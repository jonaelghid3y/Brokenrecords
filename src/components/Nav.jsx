// Nav.jsx
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdManageAccounts } from 'react-icons/md';
import { AiOutlineShopping } from 'react-icons/ai';
import { CartContext } from '../components/CartContext';

const Nav = () => {
  const location = useLocation();
  const { cart } = useContext(CartContext);

  // Compute cart length
  const cartLength = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav id="nav">
      <Link
        to="/"
        className={`länkar ${location.pathname === '/' ? 'active' : ''}`}
      >
        Products
      </Link>
      <Link
        to="/admin/Manageproducts"
        className={`länkar ${location.pathname === '/admin/Manageproducts' ? 'active' : ''
          }`}
      >
        <MdManageAccounts size={40} />
      </Link>
      <Link
        id="carticon"
        to="/Checkout"
      >
        <button id="cartbutton">
          <AiOutlineShopping size={40} />
          <span id="cartcount">{cartLength}</span>
        </button>
      </Link>
    </nav>
  );
};

export default Nav;
