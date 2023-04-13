import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const UpdateProduct = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseyear, setReleaseYear] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState('');

  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://product-api-production-7dbf.up.railway.app/products/" + params.id);
        const product = await response.json();
        setProduct(product);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, [params.id]);

  useEffect(() => {
    // Update state values once product state is available
    setTitle(product.title || '');
    setDescription(product.description || '');
    setCategory(product.category || '');
    setReleaseYear(product.releaseyear || '');
    setPrice(product.price || '');
    setStock(product.stock || '');
    setImage(product.image || '');
  }, [product])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      description,
      price,
      stock,
      category,
      releaseyear,
      image
    };

    try {
      await fetch("https://product-api-production-7dbf.up.railway.app/products/" + params.id, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(formData)
      // Redirect without page reload
      navigate("/ManageProducts");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div id="uppdateproductdiv">
      <form id="form" onSubmit={handleSubmit}>
        <p>Album</p>
        <input type="text" className='titleInput' placeholder='Album Title' value={title} onChange={e => setTitle(e.target.value)} />
        <p>Artist</p>
        <input type="text" className='artistInput' placeholder='Artist Name' value={description} onChange={e => setDescription(e.target.value)} />
        <p>Release year</p>
        <input type="text" className='releaseYearInput' pattern="[0-9]{4}" placeholder='Release Year' value={releaseyear} onChange={e => setReleaseYear(e.target.value)} />
        <p>Genre</p>
        <input type="text" className='genreInput' placeholder='Music Genre' value={category} onChange={e => setCategory(e.target.value)} />
        <p>price</p>
        <input type="number" className='priceInput' placeholder='Price' value={price} onChange={e => setPrice(e.target.value)} />
        <p>Stock</p>
        <input type="number" className='stockInput' placeholder='Stock' value={stock} onChange={e => setStock(e.target.value)} />
        <p>Image url</p>
        <input type="text" className='imageURLInput' placeholder='Image URL' value={image} onChange={e => setImage(e.target.value)} />
        <Link to="/Manageproducts">&#8592; Back</Link>
        <button>Update</button>

      </form>
    






    </div>
  )
}

export default UpdateProduct