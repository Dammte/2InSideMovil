import { CardTestimonialComponent } from "../index";
import "./TestimonialComponent.css";

export const TestimonialComponent = () => {
  return (
    <section className="testimonials">
      <h2>Opiniones de Nuestros Clientes</h2>
      <div className="testimonial">
        <CardTestimonialComponent
          img="https://i.ibb.co/n6WBc27/image-2025-01-23-164023469.png"
          paragraph="¡Excelente servicio, muy recomendado!"
          rate="Cliente Satisfecho"
        />
        <CardTestimonialComponent
          img="https://i.ibb.co/n6WBc27/image-2025-01-23-164023469.png"
          paragraph="¡Excelente servicio, muy recomendado!"
          rate="Cliente Satisfecho"
        />
      </div>
      {/* Agregar más testimonios según sea necesario */}
    </section>
  );
};

