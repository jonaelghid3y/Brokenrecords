import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://product-api-production-7dbf.up.railway.app/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

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
      <InfoContainer>
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
        <div>
          <h5>{product.price}kr</h5>
          <div>
            <h5>{product.stock}st</h5>
          </div>
        </div>
        <button>Köp</button>
      </InfoContainer>
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
export default Product;
