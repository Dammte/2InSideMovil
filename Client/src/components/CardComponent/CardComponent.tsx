import "./CardComponent.css";

interface Props {
    title: string;
    paragraph: string;
}

interface PropsContact {
    title: string;
    points: Array<String>;
}

interface PropsTestimonial {
    img: string;
    paragraph: string;
    rate: string;
}

export const CardComponent = ({ title, paragraph }: Props) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{paragraph}</p>
        </div>
    );
}

export const CardContactComponent = ({ title, points }: PropsContact) => {
    return (
        <div className="card-contact">
            <h3>{title}</h3>
            {points.map((points) => {
                return (
                    <ul>
                        <li>{points}</li>
                    </ul>
                )
            })}
        </div>
    );
}

export const CardTestimonialComponent = ({img, paragraph, rate}: PropsTestimonial) => {
    return (
        <div className="card-testimonial">
            <div className="card-testimonial-img">
                <img src={img} alt="testimonials" />
            </div>
            <div className="card-testimonial-text">
                <p>{paragraph}</p>
                <span>{rate}</span>
            </div>
        </div>
    );
}