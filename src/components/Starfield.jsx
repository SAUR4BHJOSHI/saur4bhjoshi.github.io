import { useEffect, useRef } from "react";
import "./Starfield.css";

// Multi-layer star parallax reacting to scroll + mouse.
export default function Starfield() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let mouseX = 0;
        let mouseY = 0;
        let scrollY = 0;
        let frame;

        const apply = () => {
            el.style.setProperty("--mx", `${mouseX}px`);
            el.style.setProperty("--my", `${mouseY}px`);
            el.style.setProperty("--sy", `${scrollY}px`);
            frame = null;
        };

        const schedule = () => {
            if (!frame) frame = requestAnimationFrame(apply);
        };

        const onMouse = (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
            schedule();
        };

        const onScroll = () => {
            scrollY = window.scrollY;
            schedule();
        };

        window.addEventListener("mousemove", onMouse);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("mousemove", onMouse);
            window.removeEventListener("scroll", onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div className="starfield" ref={ref} aria-hidden="true">
            <div className="starfield__layer starfield__layer--far" />
            <div className="starfield__layer starfield__layer--mid" />
            <div className="starfield__layer starfield__layer--near" />
        </div>
    );
}
