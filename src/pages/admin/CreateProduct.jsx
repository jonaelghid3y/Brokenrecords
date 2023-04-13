import React, { useState } from 'react';

const CreateProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [releaseyear, setReleaseYear] = useState('');
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      title,
      description,
      price,
      stock,
      category,
      releaseyear
    };

    try {
      const response = await fetch('https://product-api-production-7dbf.up.railway.app/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
         
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log('Success:', data)
    } catch (error) {
      console.error('Error:', error);
    }
    console.log(formData)
  }

  return (
    <div id='createProductDiv'>
      <form onSubmit={handleSubmit} id='createProductForm'>
        <input type="text" className='titleInput' placeholder='Album Title' value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" className='artistInput' placeholder='Artist Name' value={description} onChange={e => setDescription(e.target.value)} />
        <input type="number" className='priceInput' placeholder='Price' value={price} onChange={e => setPrice(e.target.value)}/>
        <input type="number" className='stockInput' placeholder='Stock' value={stock} onChange={e => setStock(e.target.value)}/>
        <input type="text" className='genreInput' placeholder='Music Genre' value={category} onChange={e => setCategory(e.target.value)} />
        <input type="text" className='releaseYearInput' pattern="[0-9]{4}" placeholder='Release Year' value={releaseyear} onChange={e => setReleaseYear(e.target.value)} />
        <input type="submit" className='addProduct' value="Add Product"/> 
      </form>
    </div>
  );
}

export default CreateProduct;
