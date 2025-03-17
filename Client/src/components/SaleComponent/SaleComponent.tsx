import "./SaleComponent.css";

export const SaleComponent = () => {
    return (
        <section className="featured">
            <div className="featured-content">
                <div id="image-left" className="featured-image">
                    <img src="https://i.ibb.co/r6nB3sZ/5787097.png" alt="Best Sales" />
                </div>
                <div className="featured-text">
                    <h2>Ofertas Especiales</h2>
                    <div className="featured-text-card">
                        <p>¡Descubre las mejores promociones en móviles y accesorios!</p> <br />
                        <button>Ver productos</button>
                    </div>
                </div>
                <div id="image-right" className="featured-image">
                    <img src="https://i.ibb.co/MnVsgxy/Special-Offer.png" alt="Special Offers" />
                </div>
            </div>
        </section>
    );
}