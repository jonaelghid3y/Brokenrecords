const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className='cart__container'>
      <ul className='cart__ul'>
        {cart && cart.map((product) =>
          <li className='cart__li' key={product._id}>
            <img className='cart__img' src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.description} {product.releaseyear}</h5>
            <p>{product.price}kr</p>
          </li>
        )}
      </ul>
      <p>Total price: {totalPrice}kr</p>
    </div>
  )
}

export default Cart;
