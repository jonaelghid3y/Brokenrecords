import React, { useState, useEffect } from 'react';

const Product = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [item, setItem] = useState([]);

  async function fetchItem() {
    const response = await fetch(
      `https://product-api-production-7dbf.up.railway.app/products`
    );
    const data = await response.json();
    setItem(data);
    console.log(data);
  }

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div>
      <h1>hwj</h1>
      {item.map((product, index) => (
        <div key={index}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img src={product.image_url} alt={product.title} />
        </div>
      ))}
    </div>
  )
}

export default Product;
