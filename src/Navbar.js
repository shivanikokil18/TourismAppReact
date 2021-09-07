import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar(){
    return (
      <div>
          <nav class="navbar navbar-expand-lg navbar-dark  navbar" style={{backgroundColor:"#2F7887"}}>
          <div class="container-fluid">
            <a class="navbar-brand" href="#">IndiaTourism</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="places" >
                Places table
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="visit">Place to visit</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about">About Us</a>
            </li>
          </ul>
        </div>
      </div>
        </nav>

      </div>

  );

}

export default Navbar;
