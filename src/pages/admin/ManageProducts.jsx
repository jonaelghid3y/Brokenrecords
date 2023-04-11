import React from 'react'
import { useState, useEffect } from "react"




const ManageProducts = () => {

  const [productList, setProductList] = useState([]);
  
  
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://product-api-production-7dbf.up.railway.app/products")
      const productList = await response.json();
      setProductList(productList);
      console.log(productList)
    }
    fetchProducts();
  }, []);

  
  return (
    <div className="pagediv">

    <h1> Manageproduct</h1>
    <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>

  </div>
  )
}

export default ManageProducts