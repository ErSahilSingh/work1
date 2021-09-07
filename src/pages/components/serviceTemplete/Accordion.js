import React from 'react'
import '../serviceTemplete/Accordion.scss';
import AccordionCard from './AccordionCard';

const Accordion=() =>{
    return (

        
        <>
            <div className="accordion " id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button bg-light " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                INTERIOR DESIGN
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body bg-light">
                   <AccordionCard/>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                LANDSCAPE DESIGN
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body bg-light">
                    <AccordionCard/>
                </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed bg-light " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                ENGINEERING PLAN
                </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body bg-light">
                    <AccordionCard/>
                </div>
                </div>
            </div>


            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                ARCHITECTURE DESIGN
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body bg-light">
                <AccordionCard/>
                </div>
                </div>
            </div>
            </div>
               
        </>
    )
}

export default Accordion;
