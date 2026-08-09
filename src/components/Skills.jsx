import { skills } from "../data/portfolio";
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
                    <article key={s.name} className="skill-card">
                        <div className="skill-card__scouter">{s.power * 100}</div>
                        <h3 className="skill-card__name">{s.name}</h3>
                        <div className="skill-card__bar">
                            <span
                                style={{ width: visible ? `${s.power}%` : "0%" }}
                            />
                        </div>
                        <p className="skill-card__desc">{s.desc}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
