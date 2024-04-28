import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faArrowTrendUp, faChildReaching, faJetFighter, faPaintRoller, faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";

export default function Skills()
{
    const skills = [
        {
            title: "Look professional",
            text: "With or without a provided guideline for UX/UI, I build apps, websites ans SaaS that look beautiful and professional.",
            icon: faThumbsUp
        },
        {
            title: "Are responsive",
            text: "From the smallest to the biggest screen, there are no limits. Things must be usable everywhere.",
            icon: faUpRightAndDownLeftFromCenter
        },
        {
            title: "Load fast",
            text: "Don't miss clients and/or prospects due to extensive loading times.",
            icon: faJetFighter
        },
        {
            title: "Easily customizable",
            text: "With the power of Wordpress, you can easily customize almost everything on your website.",
            icon: faPaintRoller
        },
        {
            title: "Are user-friendly",
            text: "Thinking about colors, positions, icons and everything else that make things easy to manage.",
            icon: faChildReaching
        },
        {
            title: "Are scalable",
            text: "If your project goes strong, from only one client to one MILLION clients (and beyond), they must experience the same stability.",
            icon: faArrowTrendUp
        },
    ];

    return (
        <section className="skills container py-5 my-5">
            <div className="row">
                <div className="col-12">
                    <div className="mb-5">
                        <div className="section-divider" data-aos="fade-up"></div>
                        <h2 className="display-2 fw-semibold mb-5" data-aos="fade-up">I build things that</h2>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-lg-5">
                        { skills.map((skill: any, i: number) => (
                            <div className="feature col mb-5" key={i} data-aos="fade-right" data-aos-delay={i * 100}>
                                <div className="feature-icon mb-3 text-white shadow">
                                    <FontAwesomeIcon icon={skill.icon} fixedWidth size="lg" />
                                </div>
                                <h3 className="h2 text-primary mb-3">{ skill.title }</h3>
                                <h5 className="text-muted">{ skill.text }</h5>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </section>
    );
}