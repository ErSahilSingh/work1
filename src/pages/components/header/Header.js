import React from 'react'
import './Header.scss';
import { FaPlay} from "@react-icons/all-files/fa/FaPlay";


const Header=() =>{
    return (
        <>
           <div className="header__1">
               
                <div className="container header__3" >
                    
                    <div className="row d-flex justify-content-center">
                        
                        <div className="col-md-5  ">
                        <h3 className="header__2 text-white  ">WE LOVE ARCHITECTURE & INTERIOR DESIGN</h3>
                        <div className="btn btn-outline-light mt-3 play-vid"><FaPlay className="mt-4" />
                       
                        </div>
                        </div>
                       

                    </div>
                    <div className="row d-flex justify-content-end">
                        <div className="col-md-5 ">
                            <hr />
                            <p className="text-white headerp__5">
                            Delectus voluptatum distinctio   pariatur, aut, doloribus officia ea molestias beatae laudantium, quam odio ipsum veritatis est maiores velit quasi blanditiis et natus accusamus itaque.
                            </p>

                        </div>
                
                </div>
                

                </div>
        </div>

        </>
    )
}

export default Header;
