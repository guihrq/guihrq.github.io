import { faGithub, faLinkedin, faMedium, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Contact()
{
    return (
        <section className="contact container py-5 my-5">
            <div className="row">
                <div className="col-12">
                    <div className="mb-5">
                        <div className="section-divider" data-aos="fade-up"></div>
                        <h2 className="display-2 fw-semibold mb-5" data-aos="fade-up">Get in touch</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex flex-row flex-wrap gap-4 justify-content-around">
                                <div data-aos="fade-right" data-aos-delay="0" data-aos-offset="0">
                                    <Link href="https://linkedin.com/in/rbfraphael" target="_blank" className="btn btn-primary btn-lg rounded-pill px-4 fw-semibold shadow">
                                        <FontAwesomeIcon icon={faLinkedin} fixedWidth /> LinkedIn
                                    </Link>
                                </div>
                                <div data-aos="fade-right" data-aos-delay="100" data-aos-offset="0">
                                    <Link href="https://github.com/rbfraphael" target="_blank" className="btn btn-light btn-lg rounded-pill px-4 fw-semibold shadow">
                                        <FontAwesomeIcon icon={faGithub} fixedWidth /> GitHub
                                    </Link>
                                </div>
                                <div data-aos="fade-right" data-aos-delay="200" data-aos-offset="0">
                                    <Link href="https://medium.com/@rbfraphael" target="_blank" className="btn btn-black btn-lg rounded-pill px-4 fw-semibold shadow">
                                        <FontAwesomeIcon icon={faMedium} fixedWidth /> Medium
                                    </Link>
                                </div>
                                <div data-aos="fade-right" data-aos-delay="300" data-aos-offset="0">
                                    <Link href="https://api.whatsapp.com/send?phone=5511969286032" target="_blank" className="btn btn-success btn-lg rounded-pill px-4 fw-semibold shadow">
                                        <FontAwesomeIcon icon={faWhatsapp} fixedWidth /> WhatsApp
                                    </Link>
                                </div>
                                <div data-aos="fade-right" data-aos-delay="400" data-aos-offset="0">
                                    <Link href="mailto:rbfraphael@gmail.com" target="_blank" className="btn btn-dark btn-lg rounded-pill px-4 fw-semibold shadow">
                                        <FontAwesomeIcon icon={faEnvelope} fixedWidth /> Email
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}