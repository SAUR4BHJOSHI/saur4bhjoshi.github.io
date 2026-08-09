import { useMemo } from "react";
import "./KiParticles.css";

// Rising glowing ki orbs. Count is configurable.
export default function KiParticles({ count = 26 }) {
    const particles = useMemo(
        () =>
            Array.from({ length: count }).map(() => {
                const size = 4 + Math.random() * 10;
                const palette = ["#ffd400", "#ff8c1a", "#7ee8ff", "#1e90ff"];
                return {
                    left: Math.random() * 100,
                    size,
                    duration: 8 + Math.random() * 12,
                    delay: -Math.random() * 20,
                    drift: (Math.random() - 0.5) * 120,
                    color: palette[Math.floor(Math.random() * palette.length)],
                };
            }),
        [count]
    );

    return (
        <div className="ki-particles" aria-hidden="true">
            {particles.map((p, i) => (
                <span
                    key={i}
                    className="ki-particle"
                    style={{
                        left: `${p.left}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        "--dur": `${p.duration}s`,
                        "--delay": `${p.delay}s`,
                        "--drift": `${p.drift}px`,
                        "--ki-color": p.color,
                    }}
                />
            ))}
        </div>
    );
}
