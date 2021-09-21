import React from "react";
import {Link, Route, Switch} from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
import MenuComponente from "./MenuComponente";
import Personajes from "./Personajes";
function Menu(){
    return(
        <>
        <Header/>
        <div className="body">
        <Route path='/' exact={true} component={MenuComponente}/>
        <Route path='/personajes' exact={true} component={Personajes}/>
        </div>
        <Footer/>
        </>
    )
}

export default Menu