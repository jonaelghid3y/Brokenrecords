import  React ,{ useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'


const UpdateProduct = () => {

  const [product, setProducts] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  

  const handleChange = (e) => {
    e.preventDefault();
    setProducts({
        ...product,
        title: e.target.value,
        description: e.target.value,
        category: e.target.value,
        releaseyear: e.target.value,
        price: e.target.value,
        stock: e.target.value,
        image: e.target.value,
        
    })
  }

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://product-api-production-7dbf.up.railway.app/products/" + params.id);
      const product = await response.json();
      setProducts(product);
      console.log(product)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchProducts() 
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await fetch("https://product-api-production-7dbf.up.railway.app/products/" + params.id, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify(product), // body data type must match "Content-Type" header
        });
          console.log(product)
        // Redirects with reload
        // window.location.href = "/manage-puns";

        // Redirect without page reload
        navigate("/ManageProducts");
    } catch(error) {
        console.log(error)
    }
  }

  return (
    <div id="uppdateproductdiv">

      <form id="form" onSubmit={handleSubmit}>
        <input type="text" value={product.title} onChange={handleChange} />
        <input type="text"value={product.description} onChange={handleChange}/>
        <input type="text" value={product.category} onChange={handleChange}/>
        <input type="text" value={product.releaseyear} onChange={handleChange}/>
        <input type="number" value={product.price} onChange={handleChange}/>
        <input type="number" value={product.stock} onChange={handleChange}/>
        <input type="string"value={product.image} onChange={handleChange}/>

        <Link to="/manage-puns">&#8592; Back</Link>
            <button>Update</button>





      </form>

    </div>
  )
}

export default UpdateProduct