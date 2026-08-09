import { profile } from "../content/portfolio";
import "./Hero.css";

export default function Hero() {
    return (
        <section id="hero" className="hero section">
            <div className="hero__aura" aria-hidden="true" />
            <div className="hero__rings" aria-hidden="true">
                <span /><span /><span />
            </div>

            <div className="hero__content">
                <p className="hero__kicker">POWER LEVEL: {profile.powerLevel}</p>
                <h1 className="hero__title">
                    Hi, I'm <span className="glow">{profile.name}</span>
                </h1>
                <h2 className="hero__subtitle">{profile.role}</h2>
                <p className="hero__stack">{profile.stack}</p>
                <div className="hero__cta">
                    <a href="#projects" className="btn btn--primary">
                        View My Battles
                    </a>
                    <a href="#contact" className="btn btn--ghost">
                        Power Up Together
                    </a>
                </div>
            </div>

            <a href="#about" className="hero__scroll">
                <span className="hero__scroll-dot" />
                Scroll to charge
            </a>
        </section>
    );
}
