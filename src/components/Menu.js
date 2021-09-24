import React from "react";
import {Route} from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
import MenuComponente from "./MenuComponente";
import Personajes from "./Personajes";
import Personajes2 from "./Personajes2";
import Personajes3 from "./Personajes3";
import Comics from "./Comics";
import Comics2 from "./Comics2";
import Comics3 from "./Comics3";
import Contacto from "./Contacto";
import Pelicula from "./Pelicula";
import Serie from "./Serie";



function Menu(){
    return(
        <>
        <Header/>
        <div className="body">
        <Route path='/' exact={true} component={MenuComponente}/>
        {/* Personajes */}

        <Route path='/personajes' exact={true} component={Personajes}/>
        <Route path='/personajes1' exact={true} component={Personajes2}/>
        <Route path='/personajes2' exact={true} component={Personajes3}/>
        {/* Comics */}
        <Route path='/comics' exact={true} component={Comics}/>
        <Route path='/comics1' exact={true} component={Comics2}/>
        <Route path='/comics2' exact={true} component={Comics3}/>
        {/* Pelicula */}
        <Route path='/pelicula' exact={true} component={Pelicula}/>
        {/* Serie */}
        <Route path='/serie' exact={true} component={Serie}/>

        {/* Contacto */}
        <Route path='/contacto' exact={true} component={Contacto}/>





        </div>
        <Footer/>
        </>
    )
}

export default Menu