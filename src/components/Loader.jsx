import { useEffect, useState } from "react";
import DragonBall from "./DragonBall";
import "./Loader.css";

export default function Loader({ onDone }) {
    const [progress, setProgress] = useState(0);
    const [leaving, setLeaving] = useState(false);

    useEffect(() => {
        let value = 0;
        const interval = setInterval(() => {
            // Charge up with a slightly uneven, energetic ramp
            value = Math.min(100, value + Math.random() * 8 + 3);
            setProgress(Math.floor(value));

            if (value >= 100) {
                clearInterval(interval);
                // Fire the Kamehameha, then reveal the site
                setTimeout(() => setLeaving(true), 500);
                setTimeout(() => onDone?.(), 1300);
            }
        }, 120);

        return () => clearInterval(interval);
    }, [onDone]);

    // Which of the 7 balls have been collected so far
    const collected = Math.round((progress / 100) * 7);

    return (
        <div className={`loader ${leaving ? "loader--leave" : ""}`}>
            <div className="loader__stars" aria-hidden="true" />

            <div className="loader__balls">
                {Array.from({ length: 7 }).map((_, i) => (
                    <div
                        key={i}
                        className={`loader__ball ${i < collected ? "is-collected" : ""}`}
                    >
                        <DragonBall stars={i + 1} size={46} />
                    </div>
                ))}
            </div>

            <div className="kame">
                <div className="kame__hands">
                    <span className="kame__orb" />
                    <div
                        className="kame__beam"
                        style={{ transform: `scaleX(${progress / 100})` }}
                    />
                </div>
                <div className="kame__label">
                    KAME<span>HAME</span>HA
                </div>
                <div className="kame__bar">
                    <div className="kame__fill" style={{ width: `${progress}%` }} />
                </div>
                <div className="kame__percent">{progress}%</div>
            </div>
        </div>
    );
}
