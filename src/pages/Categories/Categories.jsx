// import React from 'react'
import { NavLink} from "react-router-dom";
import image1 from '../../assets/tmpAssets/woman2.png';

const Categories = () => {
  return (
    <div className="flex justify-center gap-10">
      <NavLink to="men">
        <div className="flex flex-col items-center border-2 border-gray-700 rounded-2xl">
          <img src={image1} alt="" 
          className="w-auto h-[200px]"
          />
          <h1>MEN</h1>
        </div>
      </NavLink>
      <NavLink to="women">
      <div className="flex flex-col items-center border-2 border-gray-700 rounded-2xl">
          <img src={image1} alt="" 
          className="w-auto h-[200px]"
          />
          <h1>WOMEN</h1>
        </div>
      </NavLink>
      <NavLink to="children">
      <div className="flex flex-col items-center border-2 border-gray-700 rounded-2xl">
          <img src={image1} alt="" 
          className="w-auto h-[200px]"
          />
          <h1>CHILDREN</h1>
        </div>
      </NavLink>
    </div>
  );
};

export default Categories;
