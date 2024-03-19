// import React from "react";
// import { useState } from 'react'

import About from "./pages/About/About"
import Categories from "./pages/Categories/Categories"
import Women from "./pages/Categories/Women"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import ErrorPage from "./pages/Error/ErrorPage"
import Products from "./pages/ProductDetails/Products"
import Men from "./pages/Categories/Men"
import Trending from "./pages/Categories/Trending"
import Children from "./pages/Categories/Children"
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"

// Layout for Pages
import RootLayout from "./pages/Layouts/RootLayout"
import CategoriesLayout from "./pages/Layouts/CategoriesLayout"


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route exact path="login" element={<Login />} />
      <Route exact path="signup" element={<Signup />} />
      <Route exact path="about" element={<About />} />
      <Route exact path="products" element={<Products />} />
      <Route exact path="categories" element={<Categories />} />
      <Route exact path="categories" element={<CategoriesLayout />}>
        <Route exact path="trending" element={<Trending />} />
        <Route exact path="women" element={<Women />} />
        <Route exact path="men" element={<Men />} />
        <Route exact path="children" element={<Children />} />
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
