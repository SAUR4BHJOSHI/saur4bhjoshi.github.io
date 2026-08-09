import { skills } from "../content/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Skills.css";

export default function Skills() {
    const [ref, visible] = useScrollReveal();

    return (
        <section id="skills" className="skills section">
            <div className="section__head">
                <span className="section__badge">★★</span>
                <h2 className="section__title">Powers &amp; Techniques</h2>
            </div>

            <div
                ref={ref}
                className={`skills__grid reveal ${visible ? "is-visible" : ""}`}
            >
                {skills.map((s) => (
                    <article className="skill-card" key={s.name}>
                        <div className="skill-card__logo">
                            <img src={s.icon} alt={s.name} loading="lazy" />
                        </div>
                        <div className="skill-card__body">
                            <div className="skill-card__top">
                                <h3 className="skill-card__name">{s.name}</h3>
                                <span className="skill-card__power">
                                    {s.power * 100}
                                </span>
                            </div>
                            <div className="skill-card__bar">
                                <span style={{ width: visible ? `${s.power}%` : "0%" }} />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
