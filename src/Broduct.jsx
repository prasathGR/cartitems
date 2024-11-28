import React, { useEffect, useState } from 'react'
import './product.css'
import { cartcontext } from './App'
import { useContext } from 'react'
export default function Broduct({product}) {
  const{cart,setCart}=useContext(cartcontext)
  const [total,setTotal]=useState(0)
  useEffect(()=>{
  setTotal(cart.reduce((acc,curr)=>acc +parseInt(curr.amt),0));
  },[cart])
  
    const removeCart = (id) => {
      setCart(cart.filter((c) => c.id !== id)); 
    };
   return (
   <>
   <h1 className="head">cart product</h1>
    <div className="cart-container">
     
        {cart.map((product)=>(
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.pic}></img>
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p> Price Rs:{product.amt}</p>
              <button   className="cancel-button" onClick={() => removeCart(product.id)}>Cancel</button>
           </div>

          </div>

        ))
       }

      
      

     
    </div>
    <h1 className="total">Total: Rs.{total}</h1>
   </>
  )
}
