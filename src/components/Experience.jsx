import { useState } from "react";
import { experience } from "../content/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Experience.css";

export default function Experience() {
    const [ref, visible] = useScrollReveal();
    const [open, setOpen] = useState({ 0: true });

    const toggle = (i) => setOpen((o) => ({ ...o, [i]: !o[i] }));

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
                {experience.map((e, i) => {
                    const isOpen = !!open[i];
                    return (
                        <article
                            className={`timeline__item ${isOpen ? "is-open" : ""}`}
                            key={`${e.company}-${i}`}
                        >
                            <span className="timeline__ball">
                                <span className="timeline__shine" />
                            </span>

                            <div className="timeline__card">
                                <button
                                    className="timeline__header"
                                    aria-expanded={isOpen}
                                    onClick={() => toggle(i)}
                                >
                                    <span className="timeline__chevron" aria-hidden="true">
                                        ▾
                                    </span>
                                    <div className="timeline__headline">
                                        <h3 className="timeline__title">
                                            {e.title},{" "}
                                            <span className="timeline__company">
                                                {e.company}
                                            </span>
                                        </h3>
                                        <span className="timeline__period">{e.period}</span>
                                    </div>
                                    <div className="timeline__stack">
                                        {e.stack.map((t) => (
                                            <span key={t}>{t}</span>
                                        ))}
                                    </div>
                                </button>

                                <div className="timeline__details">
                                    <div className="timeline__details-inner">
                                        {e.location && (
                                            <p className="timeline__location">{e.location}</p>
                                        )}
                                        {e.summary && (
                                            <p className="timeline__summary">{e.summary}</p>
                                        )}
                                        <ul className="timeline__points">
                                            {e.points.map((p, j) => (
                                                <li key={j}>{p}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
