import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  return (

    <nav id="nav">
      <Link to="/" className={`länkar ${location.pathname === '/' ? 'active' : ''}`}>Products</Link>
      <Link to="/admin/Manageproducts" className={`länkar ${location.pathname === 'admin/Manageproducts' ? 'active' : ''}`}>Admin</Link>
      <Link to="/Checkout" className={`länkar ${location.pathname === '/Checkout' ? 'active' : ''}`}>Cart</Link>
    </nav>
  )
}

export default Nav