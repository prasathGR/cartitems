import React from 'react'
import './item.css'
export default function Item({product ,cart,setCart }) {
  const name= product.name.length>5?product.name.substring(0,5)+"..":product.name
  const addCart=()=>{
    setCart([...cart, product]);
  };
  const removeCart=()=>{
    setCart(cart.filter((c)=>c.id!== product.id));
  }
  
  return (
    <div className='product'>
        <div className="img">
            <img src={product.pic}></img>
        </div>
        <div className="details">
        <h3>{name}</h3>
        <p>Rs.{product.amt}</p>
      {
        cart.includes(product)?(<button className="btn-remove" onClick={removeCart} >remove the cart</button>)
        :(
          <button onClick={addCart}>add to cart</button>
        )
      }
        </div>
       
    </div>
  )
}
