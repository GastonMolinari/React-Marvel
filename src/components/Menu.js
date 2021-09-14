import React from "react";
import {Link, Route, Switch} from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
import MenuComponente from "./MenuComponente";
function Menu(){
    return(
        <>
        <Header/>
        <body className="body">
        <MenuComponente/>
        </body>
        <Footer/>
        </>
    )
}

export default Menu