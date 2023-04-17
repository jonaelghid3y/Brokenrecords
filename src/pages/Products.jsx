import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext';

const Products = () => {
  const [productList, setProductList] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://product-api-production-7dbf.up.railway.app/products")
      const productList = await response.json();
      setProductList(productList);
    }
    fetchProducts();
  }, []);

  return (
    <div className='pagediv'>
      <ul className='productUL'>
        {productList.map((products) =>
          <li className='productListItem' key={products._id}>
            <Link to={"/Product/" + products._id}><img className='bigListImage' src={products.image} alt="" /></Link> 
           <div className='topRowProducts'> <h4 className='albumInfo'> {products.description}  {"("}{products.releaseyear}{")"}</h4> <p className='priceTag'> {products.price}kr</p></div> 

           <div className='bottomRowProducts'> <h5 className='albumTitle'>  {products.title}</h5>
            <button onClick={() => addToCart(products)}> 
              <img src="../../imgs/352007_add_cart_shopping_icon.svg" alt="" className='shoppingCartIcon' />
            </button> 
            </div>
            
          </li>
        )}
      </ul>
    </div>
  )
}

export default Products;
