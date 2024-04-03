// import React from 'react'

import aboutBanner from "../../assets/tmpAssets/about.jpg";
import Contributor from "./Contributor";
import contributor1Img from "../../assets/tmpAssets/me.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <NavLink to="/">
          <img
            src={aboutBanner}
            alt="About Us"
            className="w-full h-64 object-cover object-center"
          />
          </NavLink>
          <div className="p-6">
            <h2 className="text-3xl font-semibold text-red-700 mb-4">
              About Us
            </h2>
            <p className="text-gray-700 mb-4">
              {`Welcome to our e-commerce store! We are dedicated to providing
              high-quality products and exceptional customer service.`}
            </p>
            <p className="text-gray-700 mb-4">
              {`Our mission is to make online shopping convenient, enjoyable, and
              hassle-free for our customers. Whether you're looking for the
              latest fashion trends, home essentials, electronics, or gifts,
              we've got you covered.`}
            </p>
            <p className="text-gray-700 mb-4">
               {`At our store, you'll find a wide selection of products sourced
              from trusted brands and suppliers. You would be able to create an account and add your prefered items to cart, and finaly order products at the convinence of your home.`}
            </p>
            <p className="text-gray-700 mb-4">
              {`Customer satisfaction is our top priority, and we're committed to
              delivering a seamless online shopping experience from start to
              finish. Our dedicated support team is here to assist you with any
              questions, concerns, or feedback you may have.`}
            </p>
            <p className="text-gray-700 mb-4">
              Thank you for choosing us as your preferred online shopping
              destination. Happy shopping!
            </p>
            <div>
              <h1 className="text-2xl text-center font-semibold text-red-700 mb-4">Meet the Development Team</h1>
            <div className="flex sm:gap-5 flex-wrap justify-center">
              
            <Contributor
                imgSrc={contributor1Img}
                name="Celestine Wangechi"
                description="Backend Developer"
                linkedin="https://www.linkedin.com/in/johndoe"
                github="https://github.com/johndoe"
                twitter="https://twitter.com/johndoe"
              />
              
              <Contributor
                imgSrc={contributor1Img}
                name="Mishak Mosimabale"
                description="FrontEnd Developer"
                linkedin="https://www.linkedin.com/in/mishak-mosimabale"
                github="https://github.com/Evarmedia"
                twitter="https://twitter.com/mosicodes"
              />

              <Contributor
                imgSrc={contributor1Img}
                name="Taiwo Taiwo"
                description="Devops"
                linkedin="https://www.linkedin.com/in/johndoe"
                github="https://github.com/johndoe"
                twitter="https://twitter.com/johndoe"
              />
            </div>
            </div>
            <div className="flex gap-10 justify-center mb-4 bg-gray-100 p-10">
              <a href="/products" className="btn-secondary">checkout the store</a>
              <a href="/categories" className="btn-secondary">see  product categories</a>
              <button className="btn-primary">contact us</button>
            </div>
            <div>
              <h1 className="text-xl text-red-700 font-semibold mb-2">Inspired by a Vision</h1>
              <p className="text-gray-700 mb-4">
              Our project was inspired by the desire to solve a pressing problem in our community. Through research and personal experiences, we identified an opportunity to create a tool that would greatly improve the lives of our target users. This shared vision fueled our dedication and collaboration throughout the process.
              </p>
            </div>
            <div>
              <h1 className="text-xl text-red-700 font-semibold mb-2">What Next?</h1>
              <p className="text-gray-700 mb-4">
              Guided by our user-centric approach and a deep understanding of emerging trends, We aim to add a user friendly CMS interface for easy access and control of all elements in the store, and to monitor sales and other operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
