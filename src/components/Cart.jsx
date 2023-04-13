// Cart.jsx

import React from 'react';

const Cart = ({ cart }) => {
  return (

    <div>
      <h3>Cart:</h3>
      <ul>
        {cart && cart.map((product) =>
          <li key={product._id}>{product.title} ({product.price}kr)</li>
        )}
      </ul>
    </div>

  )
}

export default Cart;
