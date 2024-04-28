import Image from "next/image";

import Logo from "@/assets/images/rbf-logo.svg"
import LogoLight from "@/assets/images/rbf-logo-light.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faMedium, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faEnvelope, faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { Dropdown } from "react-bootstrap";

export default function Header()
{
    return (
        <header className="container-fluid">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-lg-auto text-center text-lg-start mb-2 mb-lg-0">
                        <Image src={Logo} alt="RBF" className="logo" />
                    </div>
                    <div className="col-12 col-lg-auto">
                        <div className="d-flex flex-row gap-2 justify-content-center justify-content-lg-end">
                            <Link href="https://linkedin.com/in/rbfraphael" target="_blank" title="LinkedIn" className="social-link">
                                <FontAwesomeIcon icon={faLinkedin} fixedWidth size="lg" />
                            </Link>
                            <Link href="https://github.com/rbfraphael" target="_blank" title="GitHub" className="social-link">
                                <FontAwesomeIcon icon={faGithub} fixedWidth size="lg" />
                            </Link>
                            <Link href="https://medium.com/@rbfraphael" target="_blank" title="Medium" className="social-link">
                                <FontAwesomeIcon icon={faMedium} fixedWidth size="lg" />
                            </Link>
                            <Link href="https://api.whatsapp.com/send?phone=5511969286032" target="_blank" title="WhatsApp" className="social-link">
                                <FontAwesomeIcon icon={faWhatsapp} fixedWidth size="lg" />
                            </Link>
                            <Link href="mailto:rbfraphael@gmail.com" target="_blank" title="Email" className="social-link">
                                <FontAwesomeIcon icon={faEnvelope} fixedWidth size="lg" />
                            </Link>
                            <Dropdown>
                                <Dropdown.Toggle className="social-link" title="Download CV">
                                    <FontAwesomeIcon icon={faFilePdf} fixedWidth size="lg" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="border-0 shadow-lg">
                                    <Dropdown.Header>&bull; Download CV</Dropdown.Header>
                                    <Dropdown.Item href="/resume/RaphaelBatistaFontao_EN.pdf" target="_blank">English Version</Dropdown.Item>
                                    <Dropdown.Item href="/resume/RaphaelBatistaFontao_EN_Ext.pdf" target="_blank">English Version (Extended)</Dropdown.Item>
                                    <Dropdown.Item href="/resume/RaphaelBatistaFontao_PT-BR.pdf" target="_blank">Brazilian Version</Dropdown.Item>
                                    <Dropdown.Item href="/resume/RaphaelBatistaFontao_PT-BR_Ext.pdf" target="_blank">Brazilian Version (Extended)</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}