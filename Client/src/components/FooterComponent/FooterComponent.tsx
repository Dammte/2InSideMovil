import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './FooterComponent.css'

const FooterComponent = () => {
  return (
    <footer className="footerContainer">
      <div className="column">
        <h3 className="title">Acerca de Nosotros</h3>
        <p>Información breve sobre la empresa o misión.</p>
      </div>
      <div className="column">
        <h3 className="title">Enlaces Rápidos</h3>
        <a href="/" className="link">Inicio</a>
        <a href="/productos" className="link">Productos</a>
        <a href="/ofertas" className="link">Ofertas</a>
        <a href="/contacto" className="link">Contacto</a>
      </div>
      <div className="column">
        <h3 className="title">Soporte al Cliente</h3>
        <p>Teléfono: +123 456 7890</p>
        <p>Email: soporte@empresa.com</p>
      </div>
      <div className="column">
        <h3 className="title">Síguenos</h3>
        <div className="socialIcons">
          <a href="https://facebook.com" className="icon"><FaFacebook /></a>
          <a href="https://twitter.com" className="icon"><FaTwitter /></a>
          <a href="https://instagram.com" className="icon"><FaInstagram /></a>
          <a href="https://linkedin.com" className="icon"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
