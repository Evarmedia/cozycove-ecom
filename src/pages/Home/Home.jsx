import React from 'react'
import Hero from "../Hero/Hero"
import { IoMdSearch } from "react-icons/io"
import Products from '../ProductDetails/Products';
import AOS from "aos";

const Home = () => {

// Effect for AOS 
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);


  return (
    <main className="px-4">
      <div className="flex justify-start my-2 sm:hidden">
        <div className="w-full group relative ">
          <input
            type="text"
              placeholder="Search products, brands and categories"
              className="
              px-8 h-8 w-full rounded-full border-gray-600 border-2 hover:border-red-300
              "
              />
          <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary absolute top-2 left-2" />
        </div>      
      </div>
        <Hero />
        <Products />
    </main>
  )
}

export default Home