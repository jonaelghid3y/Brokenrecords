import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext';
import uuid4 from "uuid4";
import Cart from '../components/Cart'
import { motion, AnimatePresence } from 'framer-motion';
import {GrChapterNext, GrChapterPrevious} from 'react-icons/gr'
import { MdStar, MdStarOutline, MdStarHalf} from 'react-icons/md'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'


const Products = () => {
  const [productList, setProductList] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevClick = () => {
    setSlideIndex(slideIndex - 1);
  };

  const handleNextClick = () => {
    setSlideIndex(slideIndex + 1);
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
    <div className='pagediv'>
 

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
    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
  >
    <ul className='slideshowUL'>
      {productList.map((products) =>
        <li className='productListItemSS' key={products._id}> 
          <div className='slideShowItem'>
            <img className='slideShowImage' src={products.image} alt="" />
            <div className='reviewText'>
              <div className='iconContainerSS'>
                <MdStar /><MdStar /><MdStar /><MdStarHalf /> <MdStarOutline />
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


      <ul className='productUL'>
        {productList.map((products) =>
          <li className='productListItem' key={uuid4()}>
            <Link to={"/Product/" + products._id}><img className='bigListImage' src={products.image} alt="" /></Link> 
           <div className='topRowProducts'> <h4 className='albumInfo'> {products.description}  {"("}{products.releaseyear}{")"}</h4> </div> 
           <div className='bottomRowProducts'> <h5 className='albumTitle'>  {products.title}</h5> 
         
            <button onClick={() => addToCart(products)}  className='shoppingCartIcon'> 
              <img src="../../imgs/352007_add_cart_shopping_icon.svg" alt=""  />
            </button> 
            <p className='priceTag'> {products.price}kr</p>
            </div>
            
          </li>
        )}
      </ul>
    </div>
  )
}

export default Products;
