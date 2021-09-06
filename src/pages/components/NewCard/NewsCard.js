import React from 'react';
import '../NewCard/NewsCard.scss';
import CardNews from './CardNews';

const NewsCard=()=> {
    return (
        <>
        <div className="container News__1 ">
            <div className="row ">
                <div className="col-md-3">
                    <h1 className="fw-bold ">NEWS</h1>
                    <hr />

                </div>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <p >Delectus voluptatum distinctio quos eius excepturi sunt pariatur, aut, doloribus officia ea molestias beatae laudantium, quam odio ipsum veritatis est maiores velit quasi blanditiis et natus accusamus itaque.</p>

                </div>

                <div className="row py-5">
                    <CardNews headingcardN="How Awesome Stay connected" imagsrc={"https://untree.co/demos/archiark/images/img_3.jpg"} cardpara="1Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
                    <CardNews headingcardN="We Need Unlimitted People" imagsrc={"https://untree.co/demos/archiark/images/img_4.jpg"} cardpara="2Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
                    <CardNews headingcardN="Important of getting a notifications" imagsrc={"https://untree.co/demos/archiark/images/img_5.jpg"} cardpara="3Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>

                    
                </div>

            </div>


        </div>
            
        </>
    )
}

export default NewsCard;


