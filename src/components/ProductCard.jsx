// import React from 'react' 
import { useContext } from 'react'
import { AppContext } from '../App'


const ProductCard = (props) => {

  const {addToCart}= useContext(AppContext);
  
  const{image,title,price}=props.product
  return (
    <>
    <div className="card" style={{width:"18rem",gap:"20px",height:"24rem",marginTop:"15px"}}>
    <img src={image} style={{width:"150px",height:"150px",margin:"20px"}} alt="" />
    <div className="card-body">
      <h5 className="card-title" style={{fontSize:"14px"}}>{title}</h5>
      <p className="card-text" style={{fontSize:"20px"}}>{price}</p>
      <a href='#' className="btn bg-black text-white mb-3 " style={{border:"1px solid"}} onClick={() => addToCart(props.product)}>Add to Cart</a>
    </div>
  </div>
  </>
  )
}

export default ProductCard