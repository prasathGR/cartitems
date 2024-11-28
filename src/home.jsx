import React, { useState } from 'react'
import data from "./product.json"
import Item from './item'
import './home.css'
import { cartcontext } from './App'
import { useContext } from 'react'
export default function Home() {
    const [product]=useState(data)
    const {cart,setCart}=useContext(cartcontext)
  return (
    <div className='homecon'>
        {product.map(
           (product)=> (
            <Item key={product.id} product={product} cart={cart} setCart={setCart}/>
           )
        )}
    </div>
  )
}
