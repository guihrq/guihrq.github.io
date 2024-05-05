import Image from "next/image";
import Photo from "@/assets/images/photo.png";

export default function Biography()
{
    return (
        <section className="biography container py-5 my-5">
            <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-5 mb-5 mb-lg-0 order-2 order-lg-0">
                    <div className="section-divider" data-aos="fade-up"></div>
                    <h2 className="display-2 fw-semibold mb-5" data-aos="fade-up">About me</h2>
                    <p data-aos="fade-up">My name is Guilherme, and I am a junior fullstack programmer with over 4 years of experience. Throughout my career, I have worked in digital agencies where I have developed a wide variety of projects. My expertise includes Laravel and Wordpress. I am passionate about continuous learning and constantly seek out new technologies to enhance my skills. My versatility, self-discipline, and ability to adapt to changes allow me to approach development challenges in an analytical and self-critical manner, always striving for excellence in my projects.</p>
                </div>
                <div className="col-12 col-lg-5" data-aos="fade-up">
                    <Image src={Photo} alt="Guilherme Henrique Borges Silva" className="img-fluid" />
                </div>
            </div>
        </section>
    );
}