import React from 'react';
import styled from 'styled-components';

const Styledtd = styled.td`

   border: 1px solid black;
  text-align: left;
  padding: 8px;

 




`;
const Styledth = styled.th`

  border: 1px solid black;
  text-align: left;
  padding: 8px;

  
  


`


const Styledtable = styled.table`
border-collapse: collapse;
width: 80%;
padding-top: 50px;
padding-bottom: 50px;
font-size: 18px;





`;

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  if (cart.length == 0) return <p>Your cart is empty</p>;
  return (
    <div className='cart__container'>

      <Styledtable>

<thead style={{ backgroundColor: "rgb(38, 38, 38)", color: "white" }}>

<tr >

  <th>Album</th>
  <th></th>
  <th>Price</th>
  <th>Stock</th>
  <th>antal</th>
  <th>lägg till</th>
  <th>Radera</th>
 


</tr>

</thead>

      {cart && cart.map((product) =>


        
        <tbody>

          <tr>
            <Styledtd> <img src={product.image} style={{ height: "100px", width: "100px", margin: "0", padding: "0" }}></img>  </Styledtd>
            <Styledtd id="carttable"><h4>{product.title}</h4> <h5>{product.description}</h5>Release date:{product.releaseyear}</Styledtd>
            <Styledtd>{product.price}kr </Styledtd>
            <Styledtd>{product.stock}</Styledtd>
            <Styledtd>{product.quantity}</Styledtd>
            <Styledtd> </Styledtd>
            
            <Styledtd > <button id="" /*</td>onClick={() => { deletePun(product['_id']) }}*/>Ta bort</button></Styledtd>

          </tr>

        </tbody>

      )}

</Styledtable>

      <p>Total price: {totalPrice}kr</p>
    </div>
  )
}

export default Cart;