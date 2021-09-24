import logo from '../assets/images/Marvel-Gasty-Logo.jpg'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';


function Header() {
    return (
      <header className='header'>
        <div className='div-header'>
          <div className='header-logo'>
           <a href="/"> <img src={logo} alt='logo' className='header-logo'/></a>
          </div>
          <div className='header-busqueda'>
            <div className='header-busqueda2'>
          <input type='text' placeholder='Que deseas buscar?....' className='header-input'/>
          <FontAwesomeIcon icon={faSearch} className='header-icono'/>
          </div>
          </div>
          </div>
          <div className='header-lista'>
          <Link to="/">Inicio</Link>
            <Link to="/personajes">Personajes</Link>
            <Link to="/comics">Comics</Link>
            <Link to="/contacto">Contactos</Link>
          </div>
      </header>
    );
  }
  
  export default Header;
  