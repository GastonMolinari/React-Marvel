import React from "react";
import shang from "../assets/images/pagina/Shang-in.jpg"
import personajes from "../assets/images/pagina/Marvel-Heroes.jpg"
import whatif from "../assets/images/pagina/whatif.jpg"
import { Link } from "react-router-dom";

function MenuComponente() {
    return(
        <>
        <div className='menu-bienvenido'>
            <div className='menu-h1'>
            <h1 >¡Bienvenido Avenger!</h1></div>
            <div className='menu-h2'>
            <h2 >Esta es una pagina creada con react con el fin de practicar y conocer nuevas herramientas espero que te guste</h2>
            </div>
        </div>
        
        <div className="menu-articulos"> 
        <article className='menu-articulo1'>
        <h2 className='menu-articulo1-h2'>Ultima pelicula de MarvelStudios:</h2>
            <img src={shang} alt='imagen' className='menu-articulo1-imagen'/>
            <h4 className='menu-articulo1-h3'>Shang-Chi y la leyenda de los Diez Anillos</h4>
            <Link to="/pelicula"><button className="menu-articulo1-boton">Ver mas</button></Link>

        </article>
        <article className='menu-articulo1'>
        <h2 className='menu-articulo1-h2'>Ultima serie de MarvelStudios:</h2>
            <img src={whatif} alt='imagen' className='menu-articulo1-imagen'/>
            <h4 className='menu-articulo1-h3'>What if...? Que pasaria si los sucesos cambiaran?</h4>
            <Link to="/serie"><button className="menu-articulo1-boton">Ver mas</button></Link>

        </article>
        <article className='menu-articulo2'>
        <h2 className='menu-articulo1-h2'>Todos los Personajes de Marvel API:</h2>

        <img src={personajes} alt='imagen' className='menu-articulo2-imagen'/>
            <h4 className='menu-articulo2-h3'>¡Los heroes mas poderosos del planeta estan aqui!</h4>
            <Link to="/personajes"><button className="menu-articulo1-boton">Ver mas</button></Link>
        </article>
        </div>
        </>
    )
}

export default MenuComponente