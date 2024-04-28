import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero()
{
    return (
        <section className="hero container">
            <div className="row vh-75 align-items-center">
                <div className="col-12 text-center">
                    <h1 className="h4 text-uppercase text-primary mb-4" data-aos="fade-up">Raphael Batista Fontão</h1>
                    <h2 className="display-1 mb-4 fw-semibold" data-aos="zoom-in">Fullstack Developer</h2>
                    <h3 className="h4 text-muted" data-aos="fade-down">PHP & JavaScript/TypeScript <span style={{whiteSpace:"nowrap"}}>Mid-Senior</span> Specialist</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center text-primary">
                    <FontAwesomeIcon icon={faChevronDown} size="lg" className="scroll-indicator" />
                </div>
            </div>
        </section>
    );
}