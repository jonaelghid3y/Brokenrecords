import React, { useContext } from 'react';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext';

const Styledtd = styled.td`
  border: 1px solid black;
  text-align: left;
  padding: 8px;
`;

const Styledth = styled.th`
  border: 1px solid black;
  text-align: left;
  padding: 8px;
`;

const Styledtable = styled.table`
  border-collapse: collapse;
  width: 80%;
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 18px;
`;

const Cart = ({ cart }) => {
  const { setCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  function addProduct(productId) {
    const updatedCart = cart.map((product) => {
      if (product._id === productId) {
        return {
          ...product,
          quantity: product.quantity + 1
        };
      } else {
        return product;
      }
    });

    setCart(updatedCart);
  }
  function reduceProduct(productId) {
    const updatedCart = cart.map((product) => {
      if (product._id === productId && product.quantity > 0) {
        return {
          ...product,
          quantity: product.quantity - 1
        };
      } else {
        return product;
      }
    });
  
    // Remove product from cart if quantity becomes zero
    const updatedCartWithoutZeroQuantity = updatedCart.filter((product) => product.quantity > 0);
    setCart(updatedCartWithoutZeroQuantity);
  }

  function removeProduct(productId) {
    const updatedCart = cart.filter((product) => product._id !== productId);
    setCart(updatedCart);
  }

  if (cart.length === 0)
    return (
      <div>
        <p>Your cart is empty</p>
        <Link to="/" className="backLink">
          &#8592; Back
        </Link>
      </div>
    );

  return (
    <div className="cart__container">
      <Styledtable>
        <thead style={{ backgroundColor: "rgb(38, 38, 38)", color: "white" }}>
          <tr>
            <Styledth>Album</Styledth>
            <Styledth></Styledth>
            <Styledth>Price</Styledth>
            <Styledth>Stock</Styledth>
            <Styledth>Quantity</Styledth>
            <Styledth>Add</Styledth>
            <Styledth>Delete</Styledth>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product._id}>
              <Styledtd>
                <img src={product.image} style={{ height: "100px", width: "100px", margin: "0", padding: "0" }} />
              </Styledtd>
              <Styledtd id="carttable">
                <h4>{product.title}</h4>
                <h5>{product.description}</h5>
                Release date:{product.releaseyear}
              </Styledtd>
              <Styledtd>{product.price}kr</Styledtd>
              <Styledtd>{product.stock}</Styledtd>
              <Styledtd>{product.quantity}</Styledtd>
              <Styledtd>
                <button onClick={()=>reduceProduct(product._id)}>-</button>
                <button onClick={() => addProduct(product._id)}>+</button>
              </Styledtd>
              <Styledtd>
                <button onClick={() => removeProduct(product._id)}>Remove</button>
              </Styledtd>
            </tr>
          ))}
        </tbody>
      </Styledtable>
      <p>Total price: {totalPrice}kr</p>
    </div>
  );
};

export default Cart;
