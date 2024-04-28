import Rating from "./Rating";

export default function Tecnologies()
{
    const categories = [
        { label: "DevOps", theme: "primary" },
        { label: "Database", theme: "black" },
        { label: "Back-end", theme: "warning" },
        { label: "Front-end", theme: "success" },
        { label: "Desktop", theme: "secondary" },
        { label: "Mobile", theme: "danger" },
        { label: "Misc", theme: "info" },
    ];

    const technicalStuff = [
        { category: 0, label: "Docker", value: 3 },
        { category: 0, label: "Linux", value: 4 },
        { category: 0, label: "Apache", value: 3 },
        { category: 0, label: "NGINX", value: 2 },

        { category: 1, label: "MySQL", value: 3 },
        { category: 1, label: "MariaDB", value: 3 },
        { category: 1, label: "PostgreSQL", value: 3 },
        { category: 1, label: "MongoDB", value: 3 },

        { category: 2, label: "PHP", value: 5 },
        { category: 2, label: "Laravel", value: 5 },
        { category: 2, label: "CodeIgniter", value: 3 },
        { category: 2, label: "Wordpress", value: 5 },
        { category: 2, label: "Node.js", value: 3 },
        { category: 2, label: "Express.js", value: 3 },
        { category: 2, label: "Nest.js", value: 2 },

        { category: 3, label: "HTML", value: 5 },
        { category: 3, label: "CSS", value: 5 },
        { category: 3, label: "JavaScript", value: 5 },
        { category: 3, label: "TypeScript", value: 5 },
        { category: 3, label: "React", value: 5 },
        { category: 3, label: "Next.js", value: 4 },
        { category: 3, label: "Angular", value: 3 },
        { category: 3, label: "Bootstrap", value: 5 },
        { category: 3, label: "jQuery", value: 5 },
        { category: 3, label: "TailwindCSS", value: 2 },
        { category: 3, label: "Svelte", value: 3 },
        { category: 3, label: "SvelteKit", value: 3 },
        
        { category: 4, label: "Electron.js", value: 3 },

        { category: 5, label: "Ionic", value: 4 },
        { category: 5, label: "React Native", value: 3 },

        { category: 6, label: "Git", value: 4 },
        { category: 6, label: "Amazon AWS", value: 2 },
        { category: 6, label: "Digital Ocean", value: 3 },
        { category: 6, label: "Microsoft Azure", value: 3 },
    ];

    return (
        <section className="tecnologies container py-5 my-5">
            <div className="row">
                <div className="col-12">
                    <div className="mb-5">
                        <div className="section-divider" data-aos="fade-up"></div>
                        <h2 className="display-2 fw-semibold mb-5" data-aos="fade-up">Technical stuff</h2>
                    </div>
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-5">
                        { technicalStuff.map((t: any, i: number) => {
                            let category = categories[t.category];
                            return (
                                <div className="col" key={i} data-aos="zoom-in" data-aos-delay={i * 10}>
                                    <span className={`badge bg-${category.theme} rounded-pill`}>{ category.label }</span>
                                    <Rating score={t.value} label={t.label} />
                                </div>
                            )
                        } ) }
                    </div>
                </div>
            </div>
        </section>
    );
}