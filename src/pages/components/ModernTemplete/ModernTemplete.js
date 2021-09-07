import React from 'react'
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import '../ModernTemplete/ModernTemplete.scss';

const ModernTemplete=()=> {
    return (
        <>
        <div className="container-fluid ModernTemplete__1" >
            <div className="row d-flex justify-content-end">
            <div className="col-md-5 ">
                    <img className="" src="https://untree.co/demos/archiark/images/img_4.jpg" width="100%" height="auto" alt="design"/>
                    
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <h6 className="mr-4 fw-bold">MODERN ARCHITECTURE</h6>
                    <hr/>
                    <p className="designmorden__4">Delectus voluptatum distinctio quos eius excepturi sunt pariatur, aut, doloribus voluptatum distinctio quos eius excepturi sunt pariatur, aut, doloribus officia ea molestias beatae laudantium, quam odio ipsum veritatis est maiores velit quasi blanditiis et natus accusamus itaque. Veniam quidem debitis odio amet voluptas distinctio dicta placeat! Et pariatur doloremque ea veniam.</p>
                    <p><a className="fw-small text-decoration-none mordicon__1 ">Learn more </a><FaArrowRight className="mordicon__2"/></p>
                </div>
                
                

            </div>
        </div>
            
        </>
    )
}

export default ModernTemplete;
