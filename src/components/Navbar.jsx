import { useEffect, useState } from "react";
import { navLinks } from "../data/portfolio";
import "./Navbar.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
            <a href="#hero" className="nav__logo" onClick={() => setOpen(false)}>
                <span className="nav__logo-orb">7</span>
                <span className="nav__logo-text">{`SAURABH`}</span>
            </a>

            <nav className={`nav__links ${open ? "is-open" : ""}`}>
                {navLinks.map((l) => (
                    <a
                        key={l.href}
                        href={l.href}
                        className="nav__link"
                        onClick={() => setOpen(false)}
                    >
                        {l.label}
                    </a>
                ))}
            </nav>

            <button
                className={`nav__toggle ${open ? "is-open" : ""}`}
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
            >
                <span /><span /><span />
            </button>
        </header>
    );
}
