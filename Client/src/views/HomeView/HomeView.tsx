import './HomeView.css';
import HeroComponent from '../../components/HeroComponent/HeroComponent';

const HomeView = () => {
  return (
    <div className="home-view">
      {/* Hero Section */}
      <section className="hero">
        <HeroComponent/>
      </section>

      {/* Servicios Principales */}
      <section id="servicios" className="services">
        <h2>Nuestros Servicios</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Venta de Móviles</h3>
            <p>Encuentra los últimos modelos al mejor precio.</p>
          </div>
          <div className="card">
            <h3>Reparación de Dispositivos</h3>
            <p>Servicio técnico especializado para tus dispositivos.</p>
          </div>
          <div className="card">
            <h3>Accesorios</h3>
            <p>Amplia variedad de accesorios para tu móvil.</p>
          </div>
        </div>
      </section>

      {/* Destacados */}
      <section id="ofertas" className="featured">
        <h2>Ofertas Especiales</h2>
        <p>Descubre las mejores promociones en móviles y accesorios.</p>
        {/* Puedes agregar una lista de productos o un carrusel aquí */}
      </section>

      {/* Testimonios */}
      <section className="testimonials">
        <h2>Opiniones de Nuestros Clientes</h2>
        <div className="testimonial">
          <p>"Excelente servicio, muy recomendado!"</p>
          <span>- Cliente Satisfecho</span>
        </div>
        {/* Agregar más testimonios según sea necesario */}
      </section>

      {/* Contacto y Ubicación */}
      <section id="contacto" className="contact">
        <h2>Contáctanos</h2>
        <p>Estamos ubicados en el centro de la ciudad. ¡Visítanos o llámanos!</p>
        <p>Teléfono: 123-456-7890</p>
        <p>Email: info@2sinmovil.com</p>
        {/* Aquí puedes integrar Google Maps */}
      </section>
    </div>
  );
};

export default HomeView;
