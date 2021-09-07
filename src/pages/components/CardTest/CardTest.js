import React from 'react';
import '../CardTest/CardTest.scss';
import { FaAngleRight} from "@react-icons/all-files/fa/FaAngleRight";
import { FaAngleLeft} from "@react-icons/all-files/fa/FaAngleLeft";
import CardTestsecond from './CardTestsecond';

const CardTest =()=> {
   
    return (
        <div className=" sec__1 bg-light ">
            <div className="container-fluid  text-center testhead__1"> 
            <h1 className="fw-bold">TESTIMONIAL</h1>
            <hr className="testhr__1"/>

        </div>

        <div className="container">
            <div className="row"> 
            <div className="col-md-12">
               <div className="d-flex justify-content-center py-3">
                        <div className="btn btn-outline-secondary btnTest__6 " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"  aria-current="true" aria-label="Slide 1"> <FaAngleLeft  /></div>
                <div className="btn btn-outline-secondary btnTest__6 " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"  aria-label="Slide 3"> <FaAngleRight /> </div>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active dot__1" aria-current="true" aria-label="Slide 1"></li>
                <li type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="dot__1" aria-label="Slide 2"></li>
                <li type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="dot__1" aria-label="Slide 3"></li>
            </ol>
            <div className="carousel-inner ">

            <div className="carousel-item  ">
            <div className="row justify-content-center">
                
                <div className="col-lg-7 col-md-7 col-sm-12 d-flex  justify-content-center">
               
                        <CardTestsecond imagsrc={"https://untree.co/demos/archiark/images/person_4.jpg"} clientname="James Campbell" clientposition="CEO, Co-Founder"/>
                    </div>
                </div>
            </div>



            <div className="carousel-item active">
            <div className="row justify-content-center">
                
                <div className="col-lg-7 col-md-7 col-sm-12 d-flex  justify-content-center">
                
                    <CardTestsecond imagsrc={"https://untree.co/demos/archiark/images/person_1.jpg"} clientname="James Campbell" clientposition="CEO, Co-Founder"/>

                    </div>
                </div>
            </div>

            <div className="carousel-item ">
            <div className="row justify-content-center">
                
                <div className="col-lg-7 col-sm-12 col-md-7 d-flex  justify-content-center">
                
                    <CardTestsecond imagsrc={"https://untree.co/demos/archiark/images/person_2.jpg"} clientname="James Campbell" clientposition="CEO, Co-Founder"/>

                    </div>
                </div>
            </div>
        </div>
            </div>
                </div>
                    </div>
                        </div>
                            </div>

        
    )
}

export default CardTest
