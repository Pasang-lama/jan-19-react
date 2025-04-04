import React from "react";
import "../../scss/layouts/header.scss"
import Logo from "../../assets/logo-basel.svg"
import { Link } from "react-router";

function Header() {
  return (
    <header>
      <div className="top-header text-light px-5 py-3 d-flex justify-content-between">
        <a href=""><i className="bi bi-phone-fill"></i> OUR PHONE NUMBER: +77 (756) 334 876</a>
        <ul className="d-flex aside-link gap-3">
          <li><Link to={"/account"}>My account </Link></li>
          <li><Link to={"/cart"}>Cart</Link></li>
          <li><Link to={"/location"} href="">  Our location</Link></li>
          <li><Link to={"/contact"}>Contact us</Link></li>
          <li><Link to={"/hook"}>Hook</Link></li>
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
        
        <Link to={"/"}><img src={Logo} height={20} alt="" /></Link>

        <button>Login / Register</button>

      </div>
    </header>
  )
}

export default Header