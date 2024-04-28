import Image from "next/image";

import ErpFundacaoFatThumb from "@/assets/images/erp-fundacao-fat.jpg";
import CryopraxisThumb from "@/assets/images/cryopraxis.jpg";
import LocalHostThumb from "@/assets/images/local.host.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

interface IProject {
    type: string;
    title: string;
    description: string;
    image: {
        src: any
        alt: string;
        width: number;
        height: number;
    };
    tags: string[];
    url?: string;
}

export default function Projects()
{
    const projects: IProject[] = [
        {
            type: "ERP Platform",
            title: "Fundação FAT",
            description: "ERP platform for managing students, partner companies, enrollments, and financial matters of the courses administered by the FAT Foundation. Integrated with Santander bank, the system allows for comprehensive financial management, from the issuance of bank slips to the inquiry and clearance of titles. With a dedicated area, students can view and make advance payments.",
            image: {
                alt: "ERP - Fundação FAT",
                src: ErpFundacaoFatThumb,
                width: 1280,
                height: 720
            },
            tags: [ "Docker", "Laravel", "MySQL", "API", "React", "NextJS", "Bootstrap" ]
        },
        {
            type: "Wordpress Website",
            title: "Cryopraxis",
            description: "Institutional website for the company Cryopraxis, with a custom theme and a personalized WordPress structure focused on robustness and stability, without the use of ready-made themes and plugins for site structure. Responsiveness and visual effects make this a modern and pleasant project. With lead management and advanced customization right from the dashboard, it's easy to update the site's content at any time.",
            image: {
                alt: "Wordpress Website - Cryopraxis",
                src: CryopraxisThumb,
                width: 1280,
                height: 720
            },
            tags: [ "Wordpress", "Composer", "MySQL", "API", "SASS", "Bootstrap" ],
            url: "https://cryopraxis.com.br"
        },
        {
            type: "Desktop application",
            title: "Local.Host",
            description: "A developer-first desktop application for easily building development environments for PHP and/or JavaScript/TypeScript projects. As an alternative to XAMPP, it offers pre-configured SSL websites, dynamic VirtualHosts, integrated DNS proxy, multiple PHP versions, multiple NodeJS versions, command-line tools (like Composer and PHP CLI), MongoDB, Apache, MySQL and helpful tools (such as MongoDB Compass and HeidiSQL).",
            image: {
                alt: "Local.Host",
                src: LocalHostThumb,
                width: 776,
                height: 548
            },
            tags: [ "Electron", "React", "Next.JS", "Material UI", "Windows" ],
            url: "https://github.com/rbfraphael/localdothost"
        },
    ];

    return (
        <section className="container projects py-5 my-5">
            <div className="row">
                <div className="col-12">
                    <div className="mb-5">
                        <div className="section-divider" data-aos="fade-up"></div>
                        <h2 className="display-2 fw-semibold mb-5" data-aos="fade-up">Latest projects</h2>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-3 g-5">
                        { projects.map((project, i) => (
                            <div className="col mb-5" key={i}>
                                <div className="card project shadow-lg border-0 rounded-4" data-aos="slide-up">
                                    <div className="card-body">
                                        <div className="project-thumb mb-3">
                                            <span className="close-button"></span>
                                            <span className="minimize-button"></span>
                                            <span className="maximize-button"></span>

                                            <Image src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} unoptimized />
                                        </div>

                                        <h3 className="h2 text-primary">{ project.type }</h3>
                                        <h4 className="text-muted mb-3">{ project.title }</h4>

                                        <ul className="list-inline">
                                            { project.tags.map((tag, j) => (
                                                <li key={j} className="list-inline-item"><span className="badge bg-dark rounded-pill">{tag}</span></li>
                                            )) }
                                        </ul>

                                        <p>{ project.description }</p>

                                        { project.url ? (
                                            <Link className="btn btn-light border-0 fw-bold" href={project.url} target="_blank">
                                                View more <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth />
                                            </Link>
                                        ) : null }
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </section>
    );
}