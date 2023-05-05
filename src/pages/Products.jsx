import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext';
import uuid4 from "uuid4";
import { motion, AnimatePresence } from 'framer-motion';
import {GrChapterNext, GrChapterPrevious} from 'react-icons/gr'
import { MdStar, MdStarOutline, MdStarHalf} from 'react-icons/md'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import {TbVinyl } from 'react-icons/tb'
import styled from 'styled-components';
import Product from '../components/Product';


const Products = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState(null);
  const [productList, setProductList] = useState([]);

  const handlePrevClick = () => {
    setSlideIndex(slideIndex - 1);
  };

  const handleNextClick = () => {
    if (slideIndex >= productList.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const handleAddToCart = (productId) => {
    const productToAdd = productList.find(product => product._id === productId);
    addToCart(productToAdd);
  };
  

 

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://product-api-production-7dbf.up.railway.app/products")
      const productList = await response.json();
      setProductList(productList);
    }
    fetchProducts();
  }, []);
  return (
    <StyledProductsdiv>
 

      <h2 className='hotText'>HOT RIGHT NOW</h2>
      
<div id='slideshowDIV'> 
  <div className="slideshowNav">
    <button className="ssbtn prev" onClick={handlePrevClick}>
      <IoIosArrowBack size={40} />
    </button>
    <button className="ssbtn next" onClick={handleNextClick}>
      <IoIosArrowForward size={40} />
    </button>
  </div>
  <motion.ul
    className="slideshow"
    initial={{ x: 0 }}
    animate={{ x: `-${slideIndex * 100}vw` }}
    transition={{ type: 'spring', stiffness: 100, damping: 30 }}
  >
    <ul className='slideshowUL'>
      {productList.map((products) =>
        <li className='productListItemSS' key={products._id}> 
          <div className='slideShowItem'>
            <img className='slideShowImage' src={products.image} alt="" />
            <div className='reviewText'>
              <div className='iconContainerSS'>
                <MdStar  /><MdStar /><MdStar /><MdStarHalf /> <MdStarOutline />
              </div>
              "THIS is the best album ever, nothing will ever top it!" - GQ
            </div>
          </div>
        </li>
      )}
    </ul>
  </motion.ul>
</div>

<br />

<h2 className='hotText'>NEW RELEASES</h2>
<ul id='newReleaseSlide'>
{productList.map((products) =>
      <li className='newReleaseItem' key={uuid4()}>
        <Link to={"/Product/" + products._id}><img className='bigListImage' src={products.image} alt="" /></Link> 
      </li>
    )}
</ul>

<br />

      <ul className='productUL'>
    {productList.map((products) =>
      <li className='productListItem' key={uuid4()}>
        <Link to={"/Product/" + products._id}><img className='bigListImage' src={products.image} alt="" /></Link> 
       <div className='topRowProducts'> <h5 className='albumTitle'>  {products.title}</h5> </div> 
        <h4 className='albumInfo'> {products.description}  {"("}{products.releaseyear}{")"}</h4>
        <div className='bottomRowProducts'>   
       <Button onClick={() => handleAddToCart(products._id)} className='cartBtn'>
       <TbVinyl size={30} className='vinylIcon'/> Add to cart 
        </Button>
        <p className='priceTag'> {products.price}:-</p>
        </div>
      </li>
    )}
  </ul>
  </StyledProductsdiv>
  )
}
const StyledProductsdiv = styled.div`

border: 1px solid black;
min-height: 535px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-bottom: 100px;
min-height: 535px;
padding-left: 1rem;
padding-right: 1rem;
/* background-color: #e6e6e6; */
background-image: url(https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80);
/* background-size: 110%;
background-repeat: no-repeat; */



`;
const Button = styled.button`
  color: white;
  border: 2px solid white;
  background: black;
  font-size: 20px;
  border-radius: 5px;
  max-height: 80px;
  width: 50%;
  margin-left: 25%;   
  margin-bottom: 10px;
  display:flex;
  align-items: center;

  &:hover {
    color: rgb(241, 198, 6);;
    border: 2px solid rgb(241, 198, 6);;
    
  }
  &:active {
    transform: scale(0.9);
  }

`;

export default Products;
