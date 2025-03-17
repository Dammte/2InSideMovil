import './HeroComponent.css';
import { FaArrowDown } from 'react-icons/fa';

export const HeroComponent = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image-left">
          <img src="https://i.ibb.co/TRqP64w/Fondo.jpg" alt="Hero Background" />
        </div>
        <div className="hero-image">
          <img src="https://i.ibb.co/z84sDVv/logo.jpg" alt="Hero logo" />
          <p id='subtitle'>¡La mejor tienda para tu móvil y demás tecnología!</p>
          <p id='paragraph'>Reparamos, asesoramos y más.</p>
          <div className="hero-buttons">
            <button className="btn-service">Servicio Técnico</button>
            <button className="btn-scroll"><FaArrowDown /></button>
          </div>
        </div>
      </div>
    </section>
  );
};
