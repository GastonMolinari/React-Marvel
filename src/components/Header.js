import logo from '../assets/images/Marvel-Gasty-Logo.jpg'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header() {
    return (
      <header className='header'>
        <div className='div-header'>
          <div className='header-logo'>
            <img src={logo} alt='logo' className='header-logo'/>
          </div>
          <div className='header-busqueda'>
            <div className='header-busqueda2'>
          <input type='text' placeholder='Que deseas buscar?....' className='header-input'/>
          <FontAwesomeIcon icon={faSearch} className='header-icono'/>
          </div>
          </div>
          </div>
          <div className='header-lista'>
            <a href='#'>Inicio</a>
            <a href='#'>Personajes</a>
            <a href='#'>Peliculas</a>
            <a href='#'>Contactos</a>
          </div>
      </header>
    );
  }
  
  export default Header;
  