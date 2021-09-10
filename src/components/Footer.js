import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'
function Footer() {
    return (
        <footer>
      <div className="footer-titulos">
          <h3>Redes Sociales</h3>
          <h3>Marvel</h3>
          <h3>Contacto</h3>
      </div>
      <div className='footer-sub'>
          <div className='footer-sub1'>
          <h4>-Redes Sociales</h4>
          <h4>-Marvel</h4>
          <h4>-Contacto</h4>
          </div>
          <div className='footer-sub1'>
              <h4>-Pagina</h4>
              <h4>-Api</h4>
          </div>
          <div className='footer-sub1'>
          <h4>-Mail</h4>
          <h4>-Telefono</h4>
          <h4>-Facebook</h4>

          </div>
      </div>
      <div className='footer-coopy'>
          <FontAwesomeIcon icon={faCopyright} className='footer-icon'/><p>Copyright Marvel - 2021. Todos los derechos reservados.</p>
      </div>
        </footer>
    );
  }
  
  export default Footer;
  