import { projects } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Projects.css";

export default function Projects() {
    const [ref, visible] = useScrollReveal();

    return (
        <section id="projects" className="projects section">
            <div className="section__head">
                <span className="section__badge">★★★</span>
                <h2 className="section__title">Legendary Battles</h2>
            </div>

            <div
                ref={ref}
                className={`projects__grid reveal ${visible ? "is-visible" : ""}`}
            >
                {projects.map((p) => (
                    <article key={p.title} className="project-card">
                        <div className="project-card__glow" aria-hidden="true" />
                        <h3 className="project-card__title">{p.title}</h3>
                        <p className="project-card__desc">{p.desc}</p>
                        <div className="project-card__tags">
                            {p.tags.map((t) => (
                                <span key={t}>{t}</span>
                            ))}
                        </div>
                        <a
                            href={p.link}
                            className="project-card__link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Enter Battle →
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}
