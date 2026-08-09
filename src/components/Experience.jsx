import { experience } from "../content/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Experience.css";

export default function Experience() {
    const [ref, visible] = useScrollReveal();

    return (
        <section id="experience" className="experience section">
            <div className="section__head">
                <span className="section__badge">★★★</span>
                <h2 className="section__title">Battle Sagas</h2>
            </div>

            <div
                ref={ref}
                className={`timeline reveal ${visible ? "is-visible" : ""}`}
            >
                {experience.map((e, i) => (
                    <article className="timeline__item" key={`${e.company}-${i}`}>
                        <span className="timeline__ball">
                            <span className="timeline__shine" />
                        </span>
                        <div className="timeline__card">
                            <span className="timeline__period">{e.period}</span>
                            <h3 className="timeline__role">{e.role}</h3>
                            <p className="timeline__company">{e.company}</p>
                            <ul className="timeline__points">
                                {e.points.map((p, j) => (
                                    <li key={j}>{p}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
