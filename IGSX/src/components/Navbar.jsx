import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="brand">
          <a href="#">IGSX</a>
        </div>
        <div className="nav-ul">
          <ul className="links">
            <li>Portfolio</li>
            <li>Now Trading</li>
            <li>
              <button className="search">
                <FaSearch />
              </button>
            </li>
            <li>
               Sign In | <button className="sign-up">Sign Up</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
