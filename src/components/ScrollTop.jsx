import { useEffect, useState } from "react";
import "./ScrollTop.css";

export default function ScrollTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 600);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <button
            className={`scroll-top ${show ? "is-visible" : ""}`}
            onClick={toTop}
            aria-label="Back to top"
        >
            ★
        </button>
    );
}
