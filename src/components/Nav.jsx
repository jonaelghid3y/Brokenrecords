// Nav.jsx
import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { BsCart4 } from 'react-icons/bs';
import { RiUserSettingsLine } from 'react-icons/ri';
import { CartContext } from '../components/CartContext';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import "@fontsource/bebas-neue";
import { color } from 'framer-motion';
import { motion } from "framer-motion"


const Nav = () => {
  const location = useLocation();
  const { cart, setCart, addProduct, reduceProduct, removeProduct } = useContext(CartContext);

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const handleAddProduct = (productId) => {
    addProduct(productId);
  };

  const handlereduceProduct = (productId) => {
    reduceProduct(productId);
  };

  const handleremoveProduct = (productId) => {

    removeProduct(productId);



  };
  const emptyCart = () => {
    setCart([]);
  }
  const [isOpen, setIsOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false); // State to track if cart dropdown is open

  const handleCartHover = () => {
    setIsCartOpen(true); // Set isCartOpen to true on hover
  };

  const handleCartLeave = () => {
    setIsCartOpen(false); // Set isCartOpen to false on hover leave
  };

  const cartLength = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav id="nav">
      <div id="logga">
        <div id="logdiv1">

        <h1 >BR</h1> 
        <motion.img 

whileHover={{ rotate: 720, transition: { duration: 3 } }}
        
        id="loggabild"  src="../imgs/6613381_disc_dj_music_turntable_vinyl_icon.png"></motion.img>
       
        <h1>KEN</h1> <br/>


        </div>
        <h1>RECORDS</h1>
        

      </div>
      <div id="navbar">
      <Link className="navbarlänk"
        to="/"
       
      >
        Products
       
      
      </Link>
      
      <p className="navbarlänk">Giftcards </p>
        <p className="navbarlänk">About </p>
      </div>
     
    
      
      <div id="icondiv">
      
      <Link
        id="carticon"
        to="/Checkout"
      >
        <button id="cartbutton" style={{marginRight: "10px", color:"white"}}>
        <div
        id="cartbutton"
        onMouseEnter={handleCartHover}
        onMouseLeave={handleCartLeave}
        style={{ position: 'relative' }} // Add relative positioning to parent container
      >
        <BsCart4 size={30} className='icons' />
        {isCartOpen && (
          <div id="carthoverdiv"  style={{ opacity: isCartOpen ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>



            <table style={{color: "black"}}>
              <thead>
                {/* Table header content */}
              </thead>
              <tbody>
                {cart.map(Product => (
                  <tr key={Product._id}>
                    <td >
                      <img src={Product.image} style={{ height: "50px" }} />
                    </td>
                    <td >
                      <h5>{Product.title}</h5>
                      <h6> {Product.description}</h6>
                    </td>
                    <td >
                      <h5>Stock:{Product.stock}</h5>{Product.price}$
                    </td>
                    <td >
                      <button onClick={() => handlereduceProduct(Product._id)}>
                        <AiFillMinusCircle style={{marginRight: '5px'}} />
                      </button>
                      {Product.quantity}
                      <button onClick={() => handleAddProduct(Product._id)}>
                        <AiFillPlusCircle style={{marginLeft: '5px',}}/>
                      </button>
                    </td>
                    <td >
                      <button onClick={() => handleremoveProduct(Product._id)}>
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h4>Total price: {totalPrice}$</h4>
            <Link  id="checkoutknapp"to={'/Checkout'}> till checkout</Link>
            <button className="DeleteButton" onClick={emptyCart}>Empty cart</button>

          </div>
        )}
      </div>
          
          <span id="cartcount" style={{marginRight: "10px"}}>{cartLength}</span>
        </button>
       

      </Link>

      <Link className='icons' style={{color: "white"}}
        to="/admin/Manageproducts"
        
          
      > 
        < RiUserSettingsLine  size={30} 
         />
      </Link>
      

      </div>
      

    </nav>
  );
};

export default Nav;
