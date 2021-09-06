import React from 'react';
import './NewsCard.scss'

const CardNews=(props)=>{
    return (
        <>
        <div className="col-md-6 col-lg-4">
                    <img src={props.imagsrc} class="img-fluid" alt="image"/>
                    <div className="mx-3 mt-4">
                    <span className="   P__2">July 17, 2019 <span className="mx-2">by </span><a href="#" className=" Admin__1">Admin</a></span>
                    <h5 className="fw-bold">{props.headingcardN}</h5>
                    <p>{props.cardpara}</p>
                    <p><a className="Admin__1">Read more</a></p>
                    </div>
                    </div>
            
        </>
    )
}

export default CardNews;
