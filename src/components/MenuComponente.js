import React from "react";
import shang from "../assets/images/pagina/Shang-in.jpg"
import personajes from "../assets/images/pagina/Marvel-Heroes.jpg"
import disney from "../assets/images/pagina/Disney-Plus.jpg"

function MenuComponente() {
    return(
        <>
        <div className='menu-bienvenido'>
            <h1>¡Bienvenido Avenger!</h1>
            <h2>Esta es una pagina creada con react con el fin de practicar y conocer nuevas herramientas espero que te guste</h2>
        </div>
        
        <div className="menu-articulos"> 
        <article className='menu-articulo1'>
        <h2 className='menu-articulo1-h2'>Ultima pelicula de MarvelStudios:</h2>
            <img src={shang} alt='imagen' className='menu-articulo1-imagen'/>
            <h4 className='menu-articulo1-h3'>Shang-Chi y la leyenda de los Diez Anillos</h4>
            <button className="menu-articulo1-boton">Ver mas</button>
            {/* <p className='menu-articulo1-p'>Shang-Chi y la leyenda de los Diez Anillos (en inglés: Shang-Chi and the Legend of the Ten Rings) es una película estadounidense de superhéroes basada en el personaje de Marvel, Shang-Chi y confirmada oficialmente en la Convención Internacional de Cómics de San Diego de 2019.
             Producida por Marvel Studios y distribuida por Walt Disney Studios Motion Pictures, es la vigésima quinta película en el Universo cinematográfico de Marvel.
             La cinta está dirigida por Destin Daniel Cretton, escrita por David Callaham y Cretton y protagonizada por Simu Liu como Shang-Chi,
              junto a Tony Leung y Awkwafina.</p> */}
        </article>
        <article className='menu-articulo2'>
        <h2 className='menu-articulo1-h2'>Todos los Personajes de Marvel API:</h2>

        <img src={personajes} alt='imagen' className='menu-articulo2-imagen'/>
            <h4 className='menu-articulo2-h3'>¡Los heroes mas poderosos del planeta estan aqui!</h4>
            <button className="menu-articulo1-boton">Ver mas</button>
        </article>
        </div>
        {/* <div className="menu-disney">
            <h1>Donde ver todas sus peliculas y series:</h1>
        <img src={disney} alt='imagen' className='menu-disney-imagen'/>
        </div> */}
        </>
    )
}

export default MenuComponente