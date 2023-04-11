import React from 'react'
import { useState, useEffect } from "react"


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
      <img src="../../imgs/0916.apnews.steelydanlps_0.jpg" alt="" />
      <h5>{products.title} </h5>
      <p>{products.price}kr</p>
      <a href="#">Read More</a>
      <button><img src="../../imgs/352007_add_cart_shopping_icon.svg" alt="" className='shoppingCartIcon' /></button>
      </li>
      )}
    </ul>
    </div>
  )
}

export default Products