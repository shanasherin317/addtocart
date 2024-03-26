
import './App.css'
import NavScrollExample from './components/Navbar'
import ImgOverlayExample from './components/Home'
import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";
import Cart from './components/Cart'
import Login from './components/Login'
import Register from './components/Register'
import { createContext } from 'react';
import { useState } from 'react'


export const AppContext=createContext();
function App() {
 
  const [cart,setCart]=useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  console.log('cart',cart);
  
  const addToCart=(data)=>{
   let r = cart.find((item) => {
      if (item.id === data.id) {
          return true
      }
  })
  !r && 
  setCart([ ...cart, {...data,count: 1 }])
  }
  const handleOnAdd=(data)=>{
    console.log(data,"data");
   const r= cart.map((item)=>{
      if(item.id===data.id){
        item.count++;
        return item
      }else{
        return item
      }
      
    })

    setCart(r);
  }
  const handleOnRemove=(data)=>{
  const r= cart.map((item)=>{
    if(item.id===data.id){
      item.count--;
      return item
    }else{
      return item
    }
  })
  setCart(r);
  }
  const removeClick=(item)=>{
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
  setCart(updatedCart);
    console.log(item,'item');
  }
 
  const obj={
   addToCart,
   cart,
  handleOnAdd,
  handleOnRemove,
  removeClick,
  isAuthenticated,
  setIsAuthenticated
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <NavScrollExample/>
      <ImgOverlayExample/>
      </div>,
    },
    {
      path: "/cart",
      element: <div>
        <NavScrollExample/>
      <Cart/>
      </div>,
    },
    {
      path: "/login",
      element: <div>
        <NavScrollExample/>
      <Login/>
      </div>,
    },
    {
      path: "/register",
      element: <div>
        <NavScrollExample/>
      <Register/>
      </div>,
    },
  ]);


  return (
    <>
      <AppContext.Provider value={obj}>
      
      <RouterProvider  router={router}>
      

      </RouterProvider>
      </AppContext.Provider>
    </>
  )
}

export default App
