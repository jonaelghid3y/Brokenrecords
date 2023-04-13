import React from 'react'
import { useState, useEffect } from "react"
import Product from '../Product';
import { Link } from 'react-router-dom';




const ManageProducts = () => {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchProducts()
  }, []) // Empty array to ensure that this runs only once, on page-reload

  const fetchProducts = async () => {
    try {
        const response = await fetch("https://product-api-production-7dbf.up.railway.app/products");
        const productList = await response.json();
        setProductList(productList);
        
    } catch(error) {
        console.log(error)
    }
  }
 

  const deletePun = async (id) => {
    try {
        await fetch("https://product-api-production-7dbf.up.railway.app/products/" + id, {
            method: 'DELETE',
        });
        
       
        console.log(id)

        fetchProducts();
    } catch(error) {
        console.log(error)
    }
  }


  return (

    <div className="pagediv">

      <Link to="/createProduct">Lägg till</Link>



      <h1> Manageproduct</h1>
      <table id="table">

        <thead>

          <tr>


            <th>Album</th>
            <th>Artist</th>
            <th>Release year</th>
            <th>Price</th>
            <th>stock</th>
            <th>Hantera</th>


          </tr>

        </thead>



        {productList.map((products) =>
          <tbody key={products['_id']}>
            <tr>

              <td>{products.title}</td>
              <td>{products.description}</td>
              <td>{products.releaseyear}</td>
              <td>{products.price}</td>
              <td>{products.stock}</td>
              <td> <Link to={"/Updateproduct/" + products['_id']}>Ändra</Link><button onClick={() => { deletePun(products['_id']) }}>Ta bort</button></td>

            </tr>

          </tbody>





        )}


      </table>



    </div>
  )
}

export default ManageProducts