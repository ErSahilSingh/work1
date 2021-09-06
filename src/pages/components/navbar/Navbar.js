import React from 'react';
import './Navbar.scss';
import {Link} from 'gatsby';
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";


import Logo from './Logo';
import SideNavbar from './sidenavbar/SideNavbar';

const Navbar=() =>{
    return (
        <>
                    <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <Logo/>
                <button className="navbar-toggler d-none  d-xl-none d-md-none  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
                </button>
                <SideNavbar />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link mx-3 " aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle mx-2" to="/Project" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Projects
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Commercial Building</a></li>
                        <li><a className="dropdown-item" href="#">Cultural Lifestyle</a></li>
                        
                        <li><a className="dropdown-item" href="#">
                        <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle mx-2 "  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="text-dark">Dropdown</span>
                    </Link>
                    <ul className="dropdown-menu droph__1" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">menu one</a></li>
                        <li><a className="dropdown-item" href="#">menu two</a></li>
                        
                        <li><a className="dropdown-item" href="#"> menu three</a></li>
                    </ul>
                    </li>
                            
                        </a></li>
                    </ul>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link mx-2" to="/Services">Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link mx-2" to="/About">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link mx-2" to="/Contact">Contact us</Link>
                    </li>
                    
                </ul>
                <div className="d-flex justify-content-end">
                    <Link className="fw-bold text-white text-decoration-none"> <FaPhoneAlt className="mx-2 fs-7"/> + 2 292 4392 327</Link>
                </div>
                </div>
            </div>
            </nav> 
        </>
    )
}

export default Navbar;
