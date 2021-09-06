import React from 'react'
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import '../DesignTemplete/DesignTemplete.scss'

function DesignTemplete() {
    return (
        <>
        <div className="container-fluid DesignTemplete__1" >
            <div className="row d-flex justify-content-end">

                <div className="col-md-3">
                    <h1 className="fw-bold">WE CREATE ARCHITECTURAL DESIGNS</h1>
                    <hr/>
                    <p>Delectus voluptatum distinctio quos eius excepturi sunt pariatur, aut, doloribus officia ea molestias beatae laudantium, quam odio ipsum veritatis est maiores velit quasi blanditiis et natus accusamus itaque. Veniam quidem debitis odio amet voluptas distinctio dicta placeat! Et pariatur doloremque ea veniam.</p>
                    <p><a className="fw-small text-decoration-none  ">Learn more <FaArrowRight/></a></p>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-6 ">
                    <img  src="https://untree.co/demos/archiark/images/img_8.jpg" width="100%" height="auto" alt="design"/>
                    
                </div>

            </div>
        </div>
            
        </>
    )
}

export default DesignTemplete;
