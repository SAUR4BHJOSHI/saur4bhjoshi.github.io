import { useEffect, useState } from "react";
import { navLinks } from "../content/portfolio";
import "./Navbar.css";

// In-page section ids to track for active-link highlighting.
const sectionIds = navLinks
    .filter((l) => !l.external && l.href.startsWith("#"))
    .map((l) => l.href.slice(1));

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 40);

            const doc = document.documentElement;
            const max = doc.scrollHeight - doc.clientHeight;
            setProgress(max > 0 ? (y / max) * 100 : 0);

            // Active section = the one crossing ~40% of the viewport.
            const marker = y + window.innerHeight * 0.4;
            let current = sectionIds[0];
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= marker) current = id;
            }
            setActive(current);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
            <div className="nav__progress" style={{ width: `${progress}%` }} />

            <a href="#hero" className="nav__logo" onClick={() => setOpen(false)}>
                <span className="nav__logo-orb">7</span>
                <span className="nav__logo-text">{`SAURABH`}</span>
            </a>

            <nav className={`nav__links ${open ? "is-open" : ""}`}>
                {navLinks.map((l) => {
                    const isActive = !l.external && l.href === `#${active}`;
                    return (
                        <a
                            key={l.label}
                            href={l.href}
                            className={`nav__link ${isActive ? "is-active" : ""}`}
                            onClick={() => setOpen(false)}
                            {...(l.external
                                ? { target: "_blank", rel: "noreferrer" }
                                : {})}
                        >
                            {l.label}
                        </a>
                    );
                })}
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
