import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  const NavRef = useRef();

  const ShowMwenu = () => {
    NavRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="nav">
      <h1 className="Logo">LOGO</h1>
      <nav className="Linker" ref={NavRef}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Product</a>
        <a href="#">FAQ</a>
        <a href="#">Contact</a>

        
        <button onClick={ShowMwenu} className="menu-btn close-menu">
          <FaTimes />
        </button>
      </nav>
      <button onClick={ShowMwenu} className="menu-btn open-menu">
          <FaBars />
        </button>
    </div>
  );
}

export default NavBar;
