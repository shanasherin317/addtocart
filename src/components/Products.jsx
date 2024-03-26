import { useEffect, useState } from 'react'
import ProductCard from './ProductCard';



const Products = () => {

  
    const [data,setData]=useState([]);
    const [filtr,setFiltr]=useState(data);

 const fetchData=async()=>{
try {
  const response=await  fetch("https://fakestoreapi.com/products")
  const convertedJson=await response.json();
console.log(convertedJson);
  setData(convertedJson);
} catch (error) {
  console.log("error",error);
}
  
 }

 useEffect(()=>{
   fetchData();

 },[])

   const filtrproduct=(cat)=>{
    const updatedList=data.filter((x)=>x.category===cat);
    console.log(cat,'cat');
    setFiltr(updatedList);
   }

  return (
   <>
   <div>
    <div>
      <h2 className='text-center mt-5 bg-warning text-white'>Latest Product</h2>
      <hr/>
    </div>
   <div className="buttons d-flex justify-content-center mt-3 mb-4">

<button className="btn btn-outline-dark me-2" onClick={()=>setFiltr(data)}>All</button>
<button className="btn btn-outline-dark me-2" onClick={()=>filtrproduct("men's clothing")}>Men's clothing</button>
<button className="btn btn-outline-dark me-2" onClick={()=>filtrproduct("women's clothing")}>Womens's clothing</button>
<button className="btn btn-outline-dark me-2" onClick={()=>filtrproduct("jewelery")}>Jewelleries</button>
<button className="btn btn-outline-dark me-2" onClick={()=>filtrproduct("electronics")}>Electronics</button>

</div>
   </div>
   <div className='flex-wrap d-flex gap-4 justify-content-center align-align-content-center '>
    {
        filtr.map((item)=>{
      return(
        <>
        <div>
        <ProductCard  product={item} />
        </div>
        </>
      )
        })
    }
   </div>
   </>
  )
}

export default Products