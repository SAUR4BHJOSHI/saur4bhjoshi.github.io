import { useState } from "react";
import { socials } from "../content/portfolio";
import "./Contact.css";

export default function Contact() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Hook this up to your email service / backend later.
        setSent(true);
        e.target.reset();
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <section id="contact" className="contact section">
            <div className="section__head">
                <span className="section__badge">★★★★</span>
                <h2 className="section__title">Summon Me</h2>
            </div>

            <p className="contact__lead">
                Collect all 7 dragon balls — or just send a message. Let's create
                something legendary together.
            </p>

            <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form__row">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    required
                />
                <button type="submit" className="btn btn--primary">
                    {sent ? "Kamehameha Fired! ⚡" : "Fire Kamehameha →"}
                </button>
            </form>

            <div className="contact__socials">
                {socials.map((s) => (
                    <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
                        {s.label}
                    </a>
                ))}
            </div>
        </section>
    );
}
