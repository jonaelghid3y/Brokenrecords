import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';

const Styledtd = styled.td`
  border: 1px solid grey;
  text-align: left;
  padding: 8px;
`;

const Styledth = styled.th`
  border: 1px solid grey;
  text-align: center;
  padding: 8px;
`;

const Styledtable = styled.table`
  border-collapse: collapse;
  width: 80%;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Styleddeletebutton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  color: red;
  padding: 5px;
  border: 2px solid red;
  border-radius: 3px;
`;

const Cart = ({ cart }) => {
  const { setCart, addProduct, reduceProduct, removeProduct } = useContext(CartContext);

  const handleAddProduct = (productId) => {
    addProduct(productId);
  };

  const handlereduceProduct = (productId) => {
    reduceProduct(productId);
  };

  const handleremoveProduct =(productId)=>{

    removeProduct();

  }
  const emptyCart = () => {
    setCart([]);
  }

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const updatedCartWithoutZeroQuantity = cart.filter((product) => product.quantity > 0);

  useEffect(() => {
    setCart(updatedCartWithoutZeroQuantity);
  }, []);



  if (cart.length === 0) {
    return (
      <div className="cart__empty">
        <p>Your cart is empty</p>
        <Link to="/" className="backLink">
          &#8592; Back
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="cart__container">
        <Styledtable>
          <thead>
            <tr>
              <Styledth>Album</Styledth>
              <Styledth></Styledth>
              <Styledth>Price</Styledth>
              <Styledth>Stock</Styledth>
              <Styledth>Quantity</Styledth>
              <Styledth>Delete</Styledth>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product._id}>
                <Styledtd>
                  <img className="cart__img" src={product.image} style={{ height: "100px", width: "100px" }} />
                </Styledtd>
                <Styledtd id="carttable">
                  <h4>{product.title}</h4>
                  <h5>{product.description}</h5>
                  Release date: {product.releaseyear}
                </Styledtd>
                <Styledtd>{product.price}kr</Styledtd>
                <Styledtd>{product.stock}</Styledtd>

                <Styledtd>
                  <div id="knappcontainer">
                    <button onClick={() => handlereduceProduct(product._id)}><AiFillMinusCircle /></button>
                    <p>{product.quantity}</p>
                    <button onClick={() => handleAddProduct(product._id)}><AiFillPlusCircle /></button>
                  </div>
                </Styledtd>
                <Styledtd>
                  <Styleddeletebutton onClick={() => handleremoveProduct(product._id)}>Remove<FaTrashAlt /></Styleddeletebutton>
                </Styledtd>
              </tr>
            ))}
          </tbody>
        </Styledtable>
        <h4>Total price: ${totalPrice}</h4>
        <Styleddeletebutton onClick={emptyCart}>Empty Cart</Styleddeletebutton>


        
          
      </div>
    </>
  );
}


export default Cart;
