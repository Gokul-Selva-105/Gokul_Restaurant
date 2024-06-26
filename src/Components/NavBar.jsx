import React from "react";
import "../Css/NavBar.css";
const NavBar = ({handleCart}) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="../../public/gif.gif" alt="Gokul Restaurant"  className="animationLogo"/>
      </div>
     <div className="media">
     <ul className="navbar-categories">
        <li>
          <h1 onClick={handleCart}>Home</h1>
        </li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search for food..." className="input" />
        {/* <a href="#" className="cartBtn">Cart</a> */}
        <button className="cartBtn" onClick={handleCart}>Cart</button>
      </div>
     </div>
    </nav>
  );
};

export default NavBar;
