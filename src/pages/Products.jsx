import React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';

const Products = () => {
  const [productList, setProductList] = useState([]);
 
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://product-api-production-7dbf.up.railway.app/products")
      const productList = await response.json();
      setProductList(productList);
    }
    fetchProducts();
  }, []);
 
  async function fetchProducts() {
    const response = await fetch("https://product-api-production-7dbf.up.railway.app/products")
    const productList = await response.json();
    setProductList(productList);
  }
  fetchProducts();
  return (

    <div className='pagediv'>
    <ul className='productUL'>
      {productList.map((products) =>
      <li className='productListItem' key={products._id}> 
      <img className='bigListImage' src={products.image} alt="" />
      <h4>{products.title} </h4>
      <h5>{products.description}  {products.releaseyear}</h5>
      <p>{products.price}kr</p>
      <Link>Read More </Link>    
       <button><img src="../../imgs/352007_add_cart_shopping_icon.svg" alt="" className='shoppingCartIcon' /></button>
      </li>
      )}
    </ul>
    </div>
  )
}

export default Products