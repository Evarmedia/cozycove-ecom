// import React from "react";
// import { useState } from 'react'

import About from "./pages/About/About"
import Categories from "./pages/Categories/Categories"
import Footer from "./pages/Footer/Footer"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import ErrorPage from "./pages/Error/ErrorPage"
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"

// Layout for Pages
import RootLayout from "./pages/Layouts/RootLayout"


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route exact path="categories" element={<Categories />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="signup" element={<Signup />} />
        <Route exact path="footer" element={<Footer />} />


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
