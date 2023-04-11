import React, {useState} from 'react'


const Product = () => {
  const [searchQuery, setSearchQuery] = useState("");
    const [item, setItem] = useState([]);
    
    
    async function fetchItem() {
      const response = await fetch(
        `https://product-api-production-7dbf.up.railway.app/products`
      );
      const data = await response.json();
      setItem(data);
    }
    
    function handleSearchChange(e) {
      setSearchQuery(e.target.value);
      fetchItem();
    }
  return (
    <div className='movies'>
          
    </div>
  )
}

export default Product