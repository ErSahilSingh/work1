import React from 'react'
import '../footer/Footer.scss'
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";
import { FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";

const Footer=()=> {
    return (
        <>
            <footer className="page-footer font-small pt-4">
                <div className="container py-5">
                <div className="row">
                    <div className="col-md-4 col-lg-4">
                    <h5 className=" mb-4  footerh__6 " >About</h5>
                    <p className="footerabout__1">Delectus voluptatum distinctio quos eius excepturi sunt pariatur, aut, doloribus officia ea molestias beatae laudantium, quam odio ipsum veritatis est maiores velit quasi blanditiis et natus accusamus itaque. Veniam quidem debitis odio amet voluptas distinctio dicta placeat! Et pariatur doloremque ea veniam. Separated they live.</p>
                    <h5 className="pt-2 footerh__6"> Connect with us</h5>
                    <ul className=" btn__1  py-3">

                       <li >
                       <a   href="#" className="text-dark btn "><FaFacebookF /></a>
                       </li>
                       <li >
                       <a   href="#" className="text-dark btn "><FaTwitter/></a>
                       </li>
                       <li >
                       <a   href="#" className="text-dark btn "><FaInstagram/></a>
                       </li>  
                       <li >
                       <a   href="#" className="text-dark btn "><FaGlobe/></a>
                       </li>  
                       <li >
                       <a   href="#" className="text-dark  btn"><FaLinkedin/></a>
                       </li> 
                   </ul>
                

                </div>
                    <div className="col-md-2"></div>


                    <div className="col-md-2 footerpara__1">
                    <h5 className="  mb-4 footerh__6 ">Navigations</h5>
                    <p  ><i className="fas fa-chevron-right "></i> Home</p>
                    <p> <i className="fas fa-chevron-right "></i> Services</p>
                    <p><i className="fas fa-chevron-right "></i> Work</p>
                    <p><i className="fas fa-chevron-right "></i> Process</p>
                    <p><i className="fas fa-chevron-right "></i> About us</p>
                       
                    </div>


                    <div className="col-md-2 py-4 footerpara__1">
                    <h5 className="  mb-4  "></h5>
                    
                    <p  ><i className="fas fa-chevron-right "></i> Press</p>
                    <p> <i className="fas fa-chevron-right "></i> Blog</p>
                    <p><i className="fas fa-chevron-right "></i> Contact</p>
                    <p><i className="fas fa-chevron-right "></i> Support</p>
                    <p><i className="fas fa-chevron-right "></i> Privacy</p>


                    </div>


                    <div className="col-md-2 py-4 footerpara__1">
                    <h5 className="  mb-4  "></h5>
                    
                    <p  ><i className="fas fa-chevron-right "></i> Privacy</p>
                    <p> <i className="fas fa-chevron-right "></i> FAQ</p>
                    <p><i className="fas fa-chevron-right "></i> Careers</p>
                    <p><i className="fas fa-chevron-right "></i> Process</p>
                    <p><i className="fas fa-chevron-right "></i> About Us</p>


                    </div>

                </div>
                
                </div>
                
                    <div className="py-5 ">
                        <div className="container">
                        <hr className=" text-center"/>
                        <p className=" footer__2 text-center text-small">Copyright ©2021 All rights reserved | This template is made with  by Colorlib</p>
                        </div>
                   

                </div>

            </footer> 
            
        </>
    )
}

export default Footer
