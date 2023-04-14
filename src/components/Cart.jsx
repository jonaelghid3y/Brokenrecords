import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className='cart__container'>
      <ul className='cart__ul'>
        {cart && cart.map((product) =>
          <li className='cart__li' key={product._id}><img className='cart__img' src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.description} {product.releaseyear}</h5>
            <p>{product.price}kr</p>
          </li>
        )}
      </ul>
    </div>

  )
}

export default Cart;
