import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const Layout=(props)=> {
    return (
        <>
        <Navbar/>
        
         {props.children}
        <Footer/>
        </>
    )
}

export default Layout;
