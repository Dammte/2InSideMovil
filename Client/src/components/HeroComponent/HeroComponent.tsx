import React from 'react';
import './HeroComponent.css';
import { FaArrowDown } from 'react-icons/fa';

const HeroComponent = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>2insidemovil</h1>
          <p>La mejor tienda para tu móvil. Reparamos, asesoramos y más.</p>
          <div className="hero-buttons">
            <button className="btn-service">Servicio Técnico</button>
            <button className="btn-scroll">
              <FaArrowDown />
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://i.ibb.co/z84sDVv/logo.jpg" alt="Hero Background" />
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
