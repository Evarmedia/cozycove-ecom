// import React from 'react'
import Hero from "../Hero/Hero"
// import Categories from "../Categories/Categories"
import { IoMdSearch } from "react-icons/io"
import ProductCard from "../ProductDetails/ProductCard"

const Home = () => {
  return (
    <main className="px-4">
      <div className="flex justify-start my-2">
        <div className="w-full group relative sm:hidden">
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
      Hero Section
        <Hero />
        <ProductCard />
        {/* <Categories /> */}
    </main>
  )
}

export default Home