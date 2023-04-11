import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  return (
    
   <nav id="nav">
        
        <Link to="/"  className={`länkar ${location.pathname === '/' ? 'active' : ''}`}>Home </Link>
        
        <Link to="/Manageproducts"  className={`länkar ${location.pathname === '/Manageproducts' ? 'active' : ''}`}> Manageproducts </Link>
        
        <Link to="/Checkout"  className={`länkar ${location.pathname === '/Checkout' ? 'active' : ''}`}> Check out </Link>

      </nav>
    
    
    
  )
}

export default Nav