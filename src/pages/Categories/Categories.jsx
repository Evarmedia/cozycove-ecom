// import React from 'react'
import { NavLink, Outlet} from "react-router-dom"

const Categories = () => {
  return (
    <div> Product Categories Page <br />
      <NavLink to="men" >Men</NavLink> <br />
      <NavLink to="women" >Women</NavLink> <br />
      <NavLink to="children" >Children</NavLink>
      <Outlet />
    </div>
  )
}

export default Categories