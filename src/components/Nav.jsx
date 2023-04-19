// Nav.jsx
import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdManageAccounts } from 'react-icons/md';
import { AiOutlineShopping } from 'react-icons/ai';
import { CartContext } from '../components/CartContext';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';


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

        <h1>BR</h1> 
        <img id="loggabild"  src="../imgs/6613381_disc_dj_music_turntable_vinyl_icon.png"/> 
        <h1>KEN</h1> <br/>


        </div>
        <h1>RECORDS</h1>
        

      </div>
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
        <MdManageAccounts size={40} color='black' />
      </Link>
      <Link
        id="carticon"
        to="/Checkout"
      >
        <button id="cartbutton">
        <div
        id="cartbutton"
        onMouseEnter={handleCartHover}
        onMouseLeave={handleCartLeave}
        style={{ position: 'relative' }} // Add relative positioning to parent container
      >
        <AiOutlineShopping size={40} />
        {isCartOpen && (
          <div id="carthoverdiv"  style={{ opacity: isCartOpen ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>



            <table>
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
          
          <span id="cartcount">{cartLength}</span>
        </button>
       

      </Link>
      

    </nav>
  );
};

export default Nav;
