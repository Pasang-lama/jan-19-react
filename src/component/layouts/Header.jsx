import React from "react";
import "../../scss/layouts/header.scss"
import Logo from "../../assets/logo-basel.svg"

function Header() {
  return (
    <header>
      <div className="top-header text-light px-5 py-3 d-flex justify-content-between">
        <a href=""><i className="bi bi-phone-fill"></i> OUR PHONE NUMBER: +77 (756) 334 876</a>
        <ul className="d-flex gap-3">
          <li><a href="">My account </a></li>
          <li><a href="">Cart</a></li>
          <li><a href="">  Our location</a></li>
          <li><a href="">Contact us</a></li>
        </ul>
      </div>
      <div className="navigation-bar d-flex justify-content-between align-items-center  px-5 py-3">
        <nav>
          <ul className="d-flex gap-3">
            <li><a href="">Home</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Page</a></li>
            <li><a href="">Feature</a></li>
          </ul>
        </nav>
        
        <a href=""> <img src={Logo} height={20} alt="" /></a>

        <button>Login / Register</button>

      </div>
    </header>
  )
}

export default Header