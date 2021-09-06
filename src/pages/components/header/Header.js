import React from 'react'
import './Header.scss';
import { FaPlay} from "@react-icons/all-files/fa/FaPlay";


const Header=() =>{
    return (
        <>
           <div className="header__1">
               
                <div className="container header__3" >
                    
                    <div className="row d-flex justify-content-center">
                        
                        <div className="col-md-4  ">
                        <h1 className="header__2 text-white  ">WE LOVE ARCHITECTURE & INTERIOR DESIGN</h1>
                        <div className="btn btn-outline-light mt-3 play-vid"><FaPlay className="mt-4" />
                       
                        </div>
                        </div>
                       

                    </div>
                    <div className="row d-flex justify-content-end">
                        <div className="col-md-6 ">
                            <hr />
                            <p className="text-white">
                            Delectus voluptatum distinctio quos eius excepturi sunt pariatur, aut, doloribus officia ea molestias beatae laudantium, quam odio ipsum veritatis est maiores velit quasi blanditiis et natus accusamus itaque.
                            </p>

                        </div>
                
                </div>
                

                </div>
        </div>

        </>
    )
}

export default Header;
