import React from 'react'
import '../ProjectCard/ProjectCard.scss';


const CardProject=(props)=>{
    return (
        <>
           <div class="hovereffect">
                        <img src={props.imgsrc} class="img-fluid" alt="image"/>
                            <div class="overlay d-flex  justify-content-center text-center flex-column align-items-center">
                            <h5 className="text-white">{props.name}</h5>
                            <p className="text-white"><a class="info" href="#"></a>Construction</p>
                        </div>
                </div> 
        </>
    )
}

export default CardProject;
