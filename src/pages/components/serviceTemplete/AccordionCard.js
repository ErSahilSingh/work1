import React from 'react';
import img1 from '../image/img-1.jpg';
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";

const AccordionCard=()=>{
    return (
        <>

            <div className="row">
                <div className="col-md-4">
                    <img className="img__1" src={img1} height="85%" width="100%"/>
                </div>
                <div className="col-md-8 ">
                <p className="accorpara__4">BDelectus voluptatum distinctio quos  doloribus officia ea molestias beatae laudantium, quam odio ipsum veritatis est maiores velit quasi blanditiis et natus accusamus itaque. Veniam quidem debitis odio amet voluptas distinctio.</p>
                    <p><a className="fw-small text-decoration-none accoricon__1 ">Learn more </a><FaArrowRight className="accricon__2"/></p>
                </div>
            </div>

            
        </>
            
    )
}

export default AccordionCard;
