import React from 'react'
import { useState, useEffect } from "react"
import Product from '../Product';




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
      <table id="table">
            
      
            
            <tr>


                <th>Titel</th>
                <th>Description</th>
                <th>Price</th>
                <th>stock</th>
                <th>Hantera</th>
                
                
            </tr>

      


      {productList.map((products) =>
      <tr>
      <td>{products.title}</td>
      <td>{products.description}</td>
      <td>{products.price}</td>
      <td>{products.stock}</td>
      
      
      <td> <button class="uppdatebtn" href="">Ändra</button><button class="deletebtn" href="#" /* data-id="${blog._id}"*/>Ta bort</button></td>
    </tr>
       
        


        
      )}
        
        
        </table>
      
      

    </div>
  )
}

export default ManageProducts