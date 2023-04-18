import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../components/CartContext';

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://product-api-production-7dbf.up.railway.app/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product.stock > 0) {
      addToCart(product);
      setProduct({ ...product, stock: product.stock - 1 });
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <ImgBackgroud>
        <InfoContainer> 
          <ImgContainer src={product.image} alt="" />
        </InfoContainer>
      </ImgBackgroud>
      <TextBox>
        <div>
          <h2>
            {product.description}
          </h2>
          <Title>
            {product.title}
          </Title>
        </div>
        <div>
          <h3> {product.releaseyear}
          </h3>
        </div>
        <PP>
          <PriceBox>
          <h4>{product.price} :-</h4>
          </PriceBox>
          <Quantety>
            <h4>{product.stock} in stock</h4>
          </Quantety>
        </PP>
        <Button onClick={handleAddToCart}>
          Add to cart
        </Button>
      </TextBox>
    </Wrapper>
  );
};


const Title = styled.h1`
  font-size: 45px;
  font-family: 'Lexend', sans-serif;
  text-align:left;
  color: black;
`;

const ImgBackgroud = styled.div `
  background-color: #fff;
  box-shadow: -20px 20px 10px rgba(0,0,0,0.3);
  height: 500px;
  width: 500px;
  align-items: center;
  border-radius: 10px;
  margin: 30px 10px
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`; 
const InfoContainer= styled.div`
text-align: left;
height: auto;
width: 600px;
`; 
const ImgContainer = styled.img`
  border-radius: 25px;
  height: 500px;
  width: 500px;
`; 

const TextBox = styled.div `
  justify-content: center;
  align-items: center;
  padding-top: 200px;
  padding-left: 50px;
  margin: 30px 50px;
  text-align: left;
  height: 700px;
  width: 600px;
  border-left: 2px solid black;
  box-shadow: -20px rgba(0,0,0,0.3);
`;
const PP = styled.div `
  display: flex;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
  padding: 10px 0px 10px 0px;
  margin-top: 40px;
  
`;
const Quantety = styled.div `
margin-left: 10px; 
border: 2px solid black;
padding: 2px 5px;
border-radius: 3px; 
`;
const PriceBox = styled.div`
background-color: skyblue;
padding: 2px 5px;
border-radius: 3px; 
`;


const Button = styled.button`
  color: limegreen};
  border: 3px solid limegreen;
  background: white;
  margin-top: 40px;
  font-size: 20px;
  padding: 2px 5px;
  border-radius: 3px;
  width: 200x;
`;



export default Product;
