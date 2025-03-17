import './HomeView.css';
import { HeroComponent, ServiceComponent, IntroComponent, SaleComponent, WhoComponent, ContactComponent } from "../../components/index.ts";
import { TestimonialComponent } from '../../components/TestimonialComponent/TestimonialComponent';

const HomeView = () => {
  return (
    <div className="home-view">

      {/* Hero Section */}
      <section className="hero">
        <HeroComponent/>
      </section>

      {/* Intro Section */}
      <section className="intro">
        <IntroComponent/>
      </section>

      {/* Servicios Principales */}
      <section className="services">
        <ServiceComponent />
      </section>

      {/* Destacados */}
      <section className="featured">
        <SaleComponent />
      </section>

      {/* ¿Quiénes somos? */}
      <section className="who">
        <WhoComponent />
      </section>

      {/* Testimonios */}
      <section className="testimonials">
        <TestimonialComponent />
      </section>

      {/* Contacto y Ubicación */}
      <section className="contact">
        <ContactComponent />
      </section>
    </div>
  );
};

export default HomeView;
