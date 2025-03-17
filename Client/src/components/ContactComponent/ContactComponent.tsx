import "./ContactComponent.css";
import { CardContactComponent } from '../index';

export const ContactComponent = () => {
    return (
        <section className="contact">
            <h2>Contáctanos</h2>
            <div className="contact-content">
                <CardContactComponent title="Teléfono" points={[`Medina de Pomar:\n(+34) 642 372 481`, `Villarcayo:\n(+34) 682 898 111`]} />
                <CardContactComponent title="Horario" points={[`Lunes a Viernes:\n 10:00 a 14:00 y de 17:00 a 20:00 horas`, `Sábados:\n 10:30 a 14:00 horas`, `Domingos:\n Cerrado`]} />
                <CardContactComponent title="Dirección" points={[`Calle Julián García Sainz de Baranda (1 frente bajo), 09500 Medina de Pomar (Burgos)`, `Calle Dr. Mendizábal, 09550 Villarcayo (Burgos)`]} />
            </div>
            {/* Aquí puedes integrar Google Maps */}
        </section>
    );
}