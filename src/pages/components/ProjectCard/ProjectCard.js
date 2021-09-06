import React from 'react';
import '../ProjectCard/ProjectCard.scss';
import CardProject from './CardProject';

const ProjectCard=()=> {
    return (
        <>
            <div className="container project__1 ">
            <div className="row py-5">
                <div className="col-md-3">
                    <h2 className="fw-bold ">PROJECTS</h2>
                    <hr />

                </div>
                <div className="col-md-3"></div>
                <div className="col-md-5">
                    <p >Delectus voluptatum r, aut, doloribus officia ea molestias beatae laudantium, quam odio ipsum veritatis est maiores velit quasi blanditiis et natus accusamus itaque.</p>

                </div>
            </div>
                <div className="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-3">
                    <CardProject imgsrc={"https://untree.co/demos/archiark/images/img_8.jpg"} name="Project One"/>
                    
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-3">
                    <CardProject imgsrc={"https://untree.co/demos/archiark/images/img_2.jpg"} name="Project second"/>
                    
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-3">
                    <CardProject imgsrc={"https://untree.co/demos/archiark/images/img_5.jpg"} name="Project One"/>
                    
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-3">
                    <CardProject imgsrc={"https://untree.co/demos/archiark/images/img_5.jpg"} name="Project One"/>
                    
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-3">
                    <CardProject imgsrc={"https://untree.co/demos/archiark/images/img_4.jpg"} name="Project second"/>
                    
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-3">
                    <CardProject imgsrc={"https://untree.co/demos/archiark/images/img_8.jpg"} name="Project One"/>
                    
                </div>

                </div>

                
            </div>
            <div  className="container d-flex justify-content-center">
            <div className="btn  my-5 btn__2 justify-content-center ">
                See all projects

                </div>

            </div>

        </>
    )
}

export default ProjectCard;
