import React from 'react'
import Accordion from './Accordion';
import '../serviceTemplete/ServiceT.scss';

const ServiceT=() =>{
    return (
        <section div className="service__1 bg-light">
        <div className="container ">
        <h6 className="fw-bold " >SERVICES</h6>
        </div>
        <hr  className=" hr__1 "/>

            <div className="container py-5">
                <div >       
                     </div>
                        <div className="row ">
                     <div className="col-md-4 col-sm-12 py-5">
                      <p className=" boldser__1">i'm sahil singh reactjs developer Contrary Contrary to p Contrary to popular belief, Lorem Ipsum is not  simply random text. It has roots in a piece of classical Latin literature from 45  to popular belief, Lorem Ipsu"de Finibus Bonorum .Lorem Ipsum has been the industry's  galley of type and scrambled it to make a type  of type and scrambled</p>
                      </div>
                      <div className="col-md-2"></div>
                         <div className="col-md-6 col-sm-12  ">
                     
                          <Accordion/>

                            
                </div>
            </div>
         </div>
               
        </section>
    )
}

export default ServiceT;
