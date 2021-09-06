import React from 'react';
import '../Navbar.scss';
import {Link} from 'gatsby';
import { FaBars } from "@react-icons/all-files/fa/FaBars";

const SideNavbar=()=>{
    return (
        <>
            <button className="btn btn-outline-secondary d-xl-none d-md-none d-block text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><FaBars/></button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body ">
                   
                    <div className="d-flex flex-column justify-content-center  mb-3">
                    <hr/>
                    <div className="p-2 "><Link className="nav-link mx-2 " aria-current="page" to="/">Home</Link></div>
                    <hr/>
                    <div className="p-2 "><Link className="nav-link mx-2" to="/Project">Project</Link></div>
                    <hr/>
                    <div className="p-2 "><Link className="nav-link mx-2" to="/Services">Services</Link></div>
                    <hr/>
                    <div className="p-2 "><Link className="nav-link mx-2" to="/About">About</Link></div>
                    <hr/>
                    <div className="p-2 "><Link className="nav-link mx-2" to="/Contact">Contact us</Link></div>
                    <hr/>
                    
                    </div>
            </div>
            </div>
        </>
    )
}

export default SideNavbar;
