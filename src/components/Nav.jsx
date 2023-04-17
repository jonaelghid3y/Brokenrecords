// Nav.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdManageAccounts } from 'react-icons/md';
import { AiOutlineShopping } from 'react-icons/ai';
import Cart from './Cart'
import Checkout from '../pages/Checkout';

const Nav = ({ cartLength}) => {
  const location = useLocation();

  return (
    <nav id="nav">
      <Link to="/" className={`länkar ${location.pathname === '/' ? 'active' : ''}`}>
        Products
      </Link>
      <Link
        to="/admin/Manageproducts"
        className={`länkar ${location.pathname === '/admin/Manageproducts' ? 'active' : ''}`}
      >
        <MdManageAccounts size={40} />
      </Link>
      <Link
        id="carticon"
        to="/Checkout"
        className={`länkar ${location.pathname === '/Checkout' ? 'active' : ''}`}
      >
        Cart
         {/* Display cart length */}
      </Link>
   
      <button id="cartbutton"><AiOutlineShopping size={40}></AiOutlineShopping><span id="cartcount">{cartLength}</span>  </button>
    </nav>
    
  )
}

export default Nav;
