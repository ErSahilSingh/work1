import React from 'react';
import '../CardTest/CardTest.scss';

const CardTestsecond=(props)=> {
    return (
        <>
           <div className="card  cardbody__1" >
                    <img src={props.imagsrc} className="card-img-top my-4  mx-auto d-block" alt="img"/>
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold text-white">{props.clientname}</h5>
                        <p className="fw-light text-light">{props.clientposition}</p>
                        <blockquote className="card-text text-light my-5 ">
								Delectus voluptatum distinctio quos eius excepturi sunt pariatur, aut, doloribus officia ea molestias beatae laudantium, quam odio ipsum veritatis est maiores velit quasi blanditiis et natus accusamus itaque. Veniam quidem debitis odio amet voluptas distinctio dicta placeat! Et pariatur doloremque ea veniam.
						</blockquote>
                        
                        </div>
                    </div>  
        </>
    )
}

export default CardTestsecond;
