import { about } from "../content/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./About.css";

export default function About() {
    const [ref, visible] = useScrollReveal();

    return (
        <section id="about" className="about section">
            <div className="section__head">
                <span className="section__badge">★</span>
                <h2 className="section__title">Origin Story</h2>
            </div>

            <div
                ref={ref}
                className={`about__grid reveal ${visible ? "is-visible" : ""}`}
            >
                <div className="about__img">
                    <div className="about__img-frame">
                        {about.photo ? (
                            <img src={about.photo} alt="Portrait" />
                        ) : (
                            <div className="about__img-placeholder">YOUR PHOTO</div>
                        )}
                    </div>
                </div>

                <div className="about__text">
                    {about.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                    <ul className="about__facts">
                        {about.facts.map((f) => (
                            <li key={f.label}>
                                <strong>{f.label}</strong> {f.value}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
