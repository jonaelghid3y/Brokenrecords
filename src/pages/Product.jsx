import React, { useState, useEffect } from 'react';

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`https://product-api-production-7dbf.up.railway.app/products`);
      const data = await response.json();
      setProduct(data);
      console.log(data);
    }
    fetchProduct();
  }, [match.params.id]);

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <img src={product.image_url} alt={product.title} />
    </div>
  )
}

export default ProductDetails;
