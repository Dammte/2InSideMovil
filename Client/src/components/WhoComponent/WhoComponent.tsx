import "./WhoComponent.css";

export const WhoComponent = () => {
    return (
        <section className="who">
            <div className="who-container">
                <div className="who-text">
                    <h2>¿Quiénes somos?</h2>
                    <p>2in Side Móvil, fundada en abril de 2015, fue la primera tienda integral en la comarca de las Merindades, ofreciendo servicios de telefonía, internet, accesorios, informática, reparaciones y envío de dinero, entre otros. Con tiendas en Medina de Pomar y Villarcayo, se enfoca en brindar atención de calidad a sus clientes en la región.</p>
                </div>
                <div className="who-image">
                    <img src="https://i.ibb.co/3fqqL9J/foto-jefe.jpg" alt="Boss-Image" />
                </div>
            </div>
        </section>
    );
}