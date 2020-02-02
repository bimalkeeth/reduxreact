import React from "react";
import {NavLink} from "react-router-dom";

const HeaderPage=()=>{
  const  activeStyle={color:"#F15B2"};
  return <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{"|"}
      <NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink>{"|"}
      <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
  </nav>
};
export default HeaderPage