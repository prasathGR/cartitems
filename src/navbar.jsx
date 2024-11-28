import React from 'react'
import {Link} from "react-router-dom"
import  './Broduct'
import './navbar.css'

export default function Navbar({cart}) {
  return (
    <>
    <div className='navbar'>
       <div className='nav-name'> food cart</div>
      <ul>
        <li>
      <Link to={"/"}>home</Link>
      </li>
      <li>
      <Link to={"/Broduct"}> <span className='cart-count'> {cart.length} </span>veiw cart</Link>
      </li>
      </ul>
   </div>
    </>
  )
}
