// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (

    
    <nav className="nav-container" >  
      <div className="container-fluid">
      <div className="nav-logo">
      <div className="nav-logo img" >
        <Link className="navbar-brand" to="/">
         <img src='data:image/png;base64,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'></img>
        </Link>
        <button

          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

        <ul className="nav-menu">



        
      <li className="nav-item">
        <NavLink exact={true} activeClassName="active" className="nav-links" to="/home" aria-current="page">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact={true} activeClassName="active" className="nav-links" to="/services">
          Services
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact={true} activeClassName="active" className="nav-links" to="/internship">
          Internship
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact={true} activeClassName="active" className="nav-links" to="/portfolio">
          Portfolio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact={true} activeClassName="active" className="nav-links" to="/career">
          Career
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact={true} activeClassName="active" className="nav-links" to="/about">
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact={true} activeClassName="active" className="nav-links" to="/blogs">
          Blogs
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact={true} activeClassName="active" className="nav-button" to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
           
              <Link className="nav-link" to="/">
                Home
              </Link>
           
         </ul>
         </div>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
