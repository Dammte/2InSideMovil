import "./ServiceComponent.css";
import { CardComponent } from '../CardComponent/CardComponent';

export const ServiceComponent = () => {
    return (
        <section className="services">
            <div className="service-content">
                <div className="service-image">
                    <img src="https://i.ibb.co/X4XDkQM/imagen-2.jpg" alt="Service Stock" />
                </div>
                <div className="service-content-cards">
                    <h1>Nuestros Servicios</h1>
                    <div className="service-cards">
                        <CardComponent title="Venta de Móviles" paragraph="¡Encuentra los últimos modelos al mejor precio!" />
                        <CardComponent title="Reparación de Dispositivos" paragraph="¡Servicio técnico especializado para tus dispositivos!" />
                        <CardComponent title="Accesorios" paragraph="¡Amplia variedad de accesorios para tu móvil!" />
                    </div>
                </div>
            </div>
        </section>
    );
}