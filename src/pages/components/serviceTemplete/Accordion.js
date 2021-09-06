import React from 'react'
import '../serviceTemplete/Accordion.scss';
import AccordionCard from './AccordionCard';

const Accordion=() =>{
    return (
        <>
            <div className="accordion " id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button bg-light " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                INTERIOR DESIGN
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body bg-light">
                   <AccordionCard/>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                LANDSCAPE DESIGN
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body bg-light">
                    <AccordionCard/>
                </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                <button className="accordion-button collapsed bg-light " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                ENGINEERING PLAN
                </button>
                </h2>
                <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                <div className="accordion-body bg-light">
                    <AccordionCard/>
                </div>
                </div>
            </div>


            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                ARCHITECTURE DESIGN
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
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
