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
      <br />
      <a href="#">{products.title} {products.price}kr</a>
      <br />
      <button>Add To Cart</button>
      </li>
      )}
    </ul>
    </div>
  )
}

export default Products