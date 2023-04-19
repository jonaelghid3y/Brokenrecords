// Nav.jsx
import React, { useContext,useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdManageAccounts } from 'react-icons/md';
import { AiOutlineShopping } from 'react-icons/ai';
import { CartContext } from '../components/CartContext';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';


const Nav = () => {
  const location = useLocation();
  const { cart,setCart, addProduct, reduceProduct,removeProduct  } = useContext(CartContext);
  
  const handleAddProduct = (productId) => {
    addProduct(productId);
  };

  const handlereduceProduct = (productId) => {
    reduceProduct(productId);
  };

  const handleremoveProduct =(productId)=>{

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
      <div
  id="cartbutton"
  onMouseEnter={handleCartHover}
  onMouseLeave={handleCartLeave}
  style={{ position: 'relative' }} // Add relative positioning to parent container
>
  Cart
  {isCartOpen && (
    <div
      style={{
        position: 'absolute', // Position the dropdown absolutely
        width: '600px',
        top: '100%', // Position it below the cart button
        right: 0, // Align it to the right of the button
        background: '#fff', // Add desired background color
        padding: '16px', // Add desired padding
        borderRadius: '4px', // Add desired border radius
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', // Add desired box shadow
        zIndex: 9999 // Add desired z-index
      }}
    >
      {/* Render cart items in table format */}
      
      <table style={{ width: '100%' }}>
        <thead>
         
        </thead>
        <tbody>
          {cart.map(Product => (
            <tr key={Product._id}>
              <td>
                <img src={Product.image} style={{ height: "50px" }} />
              </td>
              <td>{Product.title}<br/>{Product.description}</td>
              
              <td> Stock: {Product.stock} st<br/>{Product.price}$</td>
              <td><button onClick={()=>handlereduceProduct(Product._id)}><AiFillMinusCircle/></button> {Product.quantity} <button onClick={()=>handleAddProduct(Product._id)}><AiFillPlusCircle/></button></td>
              <td><button  onClick={()=>handleremoveProduct(Product._id)}><FaTrashAlt/></button></td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <button  className="DeleteButton" onClick={emptyCart}>Remove</button>
    </div>
  )}
</div>

      
    </nav>
  );
};

export default Nav;
