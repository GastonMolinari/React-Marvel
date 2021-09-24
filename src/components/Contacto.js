import React from "react";
import likelogo from "../assets/images/pagina/linkedin-contacto.png"
import disneylogo from "../assets/images/pagina/Disney+_logo.svg.png"
import marvellogo from "../assets/images/pagina/Marvel-contacto.png"


function Contacto() {
    return(
        <>
        <div className='contacto-h1'>
            <h1 style={{margin: "0%", color: 'white', padding: "40px", textAlign: "center"}}>Gracias por visitar esta pagina!</h1>
        </div>
        <div className='Contacto-logos' style={{width: "100%", height: "200px", textAlign: "center", paddingTop: "25px"}}>
        <h1 style={{margin: "0px", paddingTop: "50px",paddingBottom: "0px", textAlign: "center", color: "whitesmoke"}}>Likedln del creador y Pagina usada: </h1>
           <a href="https://www.linkedin.com/in/gastonmolinari/" target="_blank"> <img src={likelogo} alt="Logolikedln" style={{ height: "100%", marginRight: "80px"}}/></a>
           <a href="https://www.marvel.com/" target="_blank"><img src={marvellogo} alt="Logolikedln" style={{ height: "100%", marginRight: "50px"}}/></a>

        </div>
        <div className="Contacto-logos" style={{width: "100%", height: "200px", textAlign: "center", paddingTop: "25px"}}>
            <h1 style={{margin: "0px", paddingTop: "50px",paddingBottom: "25px", textAlign: "center", color: "whitesmoke"}}> Para ver todas sus series y peliculas: </h1>
           <a href="https://www.disneyplus.com" target="_blank"><img src={disneylogo} alt="Logolikedln" style={{ height: "90%", marginRight: "80px",}}/></a>
        </div>
        <div className='contacto-h1'>
            <h1 style={{margin: "0%", color: 'white', paddingTop: "300px", textAlign: "center"}}>Pagina React con Pokemon API proximamente....</h1>
        </div>
        </>
    )
}

export default Contacto