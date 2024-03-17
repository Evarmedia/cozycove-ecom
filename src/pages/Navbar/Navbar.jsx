// import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="">
      <div className=" flex justify-start gap-10 text-black bg-red-500 text-xl p-2 font-bold uppercase">
        <a href="/">CozyCove</a>
      <ul className="flex justify-start gap-10">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/categories">Categories</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        
        <li><NavLink to="/login">
        <button>Login</button>
          </NavLink></li>
          <li><NavLink to="/signup">
        <button>SignUp</button>
          </NavLink></li>
      </ul>
        <div><AiOutlineShoppingCart /></div>
   </div>
    </nav>
    
  )
}

export default Navbar