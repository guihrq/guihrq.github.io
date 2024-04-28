import Image from "next/image";

import LogoLight from "@/assets/images/rbf-logo-light.svg";

export default function Footer()
{
    return (
        <footer className="container-fluid py-4 bg-dark">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
                        <Image src={LogoLight} alt="RBF" className="footer-logo" />
                    </div>
                    <div className="col-12 col-lg-6 text-center text-lg-end text-white">
                        <p className="m-0">Raphael Batista Fontão</p>
                        <p className="m-0">Fullstack Mid-Senior PHP & JavaScript Developer</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}