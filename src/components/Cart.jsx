import { useContext } from 'react'
import { AppContext } from '../App'

const Cart = () => {
  const {cart,handleOnAdd,handleOnRemove,removeClick}=useContext(AppContext)
  console.log(cart,"cart");
  const totalPrice=cart.reduce((price,item)=>price+item.count*item.price,0);
  
  return (
   <>
{cart.length>0 ?
<div className='cart-page flex-wrap d-flex gap-4 justify-content-center align-content-center'>

{
  
    cart?.map((item)=>{
        return(
          <>
          <div className='card'  style={{width:"18rem",gap:"20px",height:"22rem",marginTop:"15px",position:"relative",marginBottom:"15px"}}>
            <img src={item.image} alt=""  style={{width:"100px",height:"100px",marginLeft:"70px",marginTop:"20px"}} />
            <p  style={{fontSize:"13px",textAlign:"center"}}>{item.title}</p>
            <p style={{fontSize:"20px",fontWeight:"bold",textAlign:"center"}}>{item.price*item.count}</p>
          <div className='btns'>
          <button className='btn1' onClick={()=>handleOnAdd(item)}>+</button>
          {item.count}
          <button className='btn1 ms-2'onClick={()=>handleOnRemove(item)} >-</button>
          </div>
          <div>
            <button className='remove' onClick={()=>removeClick(item)}>
              Remove
            </button>
          </div>
            </div>
          </>
          
        )
    }) 
}

</div> : ''
}
{cart.length>0 ?
<div style={{fontSize:"20px",textAlign:"center"}}>TOTAL PRICE
              <div>${totalPrice}</div>
            </div> : <div className='text-center mt-5 text-secondary fs-1'>Cart is empty<i className="fa-solid fa-cart-shopping"></i></div>
            }
            
 </>

  )
}

export default Cart