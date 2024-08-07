import React from "react";

//  import Navbar from "Navbar"
import { NavLink } from "react-router-dom";
export const Header = () =>{
    return(
        <navbar className="navbar navbar-expand-lg py-3 sticky-top navbar-light bg-white">
        <div className="container-fluid">
          <a className="navbar-brand logo" to="#">
            ★Clͥasͣsͫic Culture★
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="/home">Home</a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#service">Services</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/contact">Contact</a>
              </li>
    
            </ul>
            <NavLink to={"/Login"}>
            <button type="submit" className="btn btn-primary ms-lg-3">Login</button>
            </NavLink>
          </div>
        </div>
      </navbar>
    )
}