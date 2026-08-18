import React from "react";
import DarkMode from "./Darkmode";
import "../Navbar.css"
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        
          <Link href='/'>
          <div className="logo-div">
                <h2 className="logo">Park</h2>
          <span>Go</span>
          </div>
          </Link>
        <div className="nav-list">
       <Link href='/about'>About Us</Link>
       <Link href='/support'>Support</Link>
       <Link href='/service'>Service</Link>
        </div>

        <DarkMode />
      </nav>
    </div>
  );
};

export default Navbar;