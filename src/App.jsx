// import React from "react";
// import { useState } from 'react'

import About from "./pages/About/About"
import Categories from "./pages/Categories/Categories"
import WomenCategory from "./pages/Categories/WomenCategory"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import ErrorPage from "./pages/Error/ErrorPage"
import Products from "./pages/ProductDetails/Products"
import Trending from "./pages/Categories/Trending"
import ChildrenCategory from "./pages/Categories/ChildrenCategory"
import ProductDetail from "./pages/ProductDetails/ProductDetail"
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"

// Layout for Pages
import RootLayout from "./pages/Layouts/RootLayout"
import CategoriesLayout from "./pages/Layouts/CategoriesLayout"
import MenCategory from "./pages/Categories/MenCategory"


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route exact path="login" element={<Login />} />
      <Route exact path="signup" element={<Signup />} />
      <Route exact path="about" element={<About />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/products/:productId" element={<ProductDetail />} />
      <Route exact path="categories" element={<Categories />} />
      <Route exact path="categories" element={<CategoriesLayout />}>
        <Route exact path="trending" element={<Trending />} />
        <Route exact path="women" element={<WomenCategory category="women"/>} />
        <Route exact path="men" element={<MenCategory category="men" />} />
        <Route exact path="children" element={<ChildrenCategory category="jewelery"/>} />
      </Route>

        <Route path="*" element={<ErrorPage />} />
      </Route>
      
  )
)
function App() {
  return (
      <RouterProvider router={router}/>      
  )
}

export default App
