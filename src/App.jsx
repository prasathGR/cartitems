
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Broduct from './Broduct';
import Home from './home';
import { createContext, useState } from 'react';
 
export const cartcontext=createContext();
function App() {
  const[cart,setCart] =useState([]);
  return (
  <cartcontext.Provider value={{cart,setCart}}>
      <BrowserRouter>
 <Navbar cart={cart }/>
 <div className='container'>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Broduct" element={<Broduct />  }></Route>
  </Routes>

 </div>
 </BrowserRouter>
  </cartcontext.Provider>
  );
}

export default App;
