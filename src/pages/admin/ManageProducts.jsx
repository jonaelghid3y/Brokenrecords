import React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Manageproductspagediv = styled.div`

font-family: Arial, Helvetica, sans-serif;
border: 1px solid black;
min-height: 535px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-bottom: 100px;
min-height: 535px;
background-image: url(../imgs/notebook-earphones-near-vinyl-record.jpg);
background-size: cover;

  

`;
const Styledtable = styled.table`
border-collapse: collapse;
width: 80%;
padding-top: 50px;
padding-bottom: 50px;
font-size: 18px;
background-color: #272424;
color: white;



`;
const Styledtd = styled.td`

   border: 1px solid black;
  text-align: left;
  padding: 8px;

 




`
const Styledth = styled.th`

  border: 1px solid black;
  text-align: left;
  padding: 8px;

  
  


`
const Styledtr = styled.tr`


&:hover {background-color: gray;}


`;
const Styledh1div = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 50px;
color: white;

margin-top: 50px;
margin-bottom: 50px;

width: 1211px;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: bold;


`;
const Styledimg = styled.img`

height: 20px;
transition: 0.5s;


`;
const Styleddeletebutton = styled.button`
border-radius: 5px;
color: white;
border: none;
background-color: rgb(212, 50, 50);
text-align: center;
padding: 5px 5px;
font-weight: bold;
height: 35px;

`;






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

    } catch (error) {
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
    } catch (error) {
      console.log(error)
    }
  }


  return (

    <Manageproductspagediv>




      <Styledh1div>

        <h1 id="h1manage" style={{ fontSize: "60px" }}> Manageproducts</h1>
        <Link id="createproductnavigering" to="/admin/createProduct">Lägg till <Styledimg id="plusbild" src="../../imgs/9023850_plus_circle_fill_icon.png" /> </Link>

      </Styledh1div>



      <Styledtable id="table">

        <thead style={{ backgroundColor: "rgb(38, 38, 38)", color: "white" }}>

          <tr >

            <Styledth>Image</Styledth>
            <Styledth>Album</Styledth>
            <Styledth>Artist</Styledth>
            <Styledth>Release year</Styledth>
            <Styledth>Price</Styledth>
            <Styledth>stock</Styledth>
            <Styledth>Hantera</Styledth>


          </tr>

        </thead>



        {productList.map((products) =>
          <tbody key={products['_id']}>
            <Styledtr>
              <Styledtd><img src={products.image} style={{ height: "70px", width: "70px", margin: "0", padding: "0" }}></img></Styledtd>
              <Styledtd>{products.title}</Styledtd>
              <Styledtd>{products.description}</Styledtd>
              <Styledtd>{products.releaseyear}</Styledtd>
              <Styledtd>{products.price}</Styledtd>
              <Styledtd>{products.stock}</Styledtd>
              <Styledtd id="knappcontainer"> <Link id="uppdateraKnapp" to={"/Updateproduct/" + products['_id']}>Ändra</Link><Styleddeletebutton id="raderaKnapp" onClick={() => { deletePun(products['_id']) }}>Ta bort</Styleddeletebutton></Styledtd>

            </Styledtr>

          </tbody>





        )}


      </Styledtable>



    </Manageproductspagediv>
  )
}

export default ManageProducts