import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './FooterComponent.css'

const FooterComponent = () => {
  return (
    <footer className="footerContainer">
      <div className="column">
        <div className="footer-references">
          <img src="https://i.ibb.co/SVcKt5H/ES-Financiado-por-la-Union-Europea-NEG-768x226-1-1-300x88.png" alt="Financiado por la Unión Europea" />
          <img src="https://i.ibb.co/Npyj946/gobierno-espa-a.jpg" alt="Gobierno de España" />
          <img src="https://i.ibb.co/XjhSWVT/plan-de-recuperaci-n.png" alt="Plan de Recuperación, Transformación y Resiliencia." />
          <img src="https://i.ibb.co/dWNZy9g/diputacion-burgos.png" alt="Diputación de Burgos." />
        </div>
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
      <div className="footer-logo">
        <img src="https://i.ibb.co/z84sDVv/logo.jpg" alt="Footer Logo" />
      </div>
    </footer>
  );
};

export default FooterComponent;
