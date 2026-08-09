import "./DragonBall.css";

// A single dragon ball orb. `stars` = 1..7
export default function DragonBall({ stars = 1, size = 60, className = "" }) {
    return (
        <div
            className={`dragon-ball ${className}`}
            style={{ width: size, height: size }}
            title={`${stars}-star ball`}
        >
            <span className="dragon-ball__shine" />
            <span className="dragon-ball__stars">
                {Array.from({ length: stars }).map((_, i) => (
                    <i key={i}>★</i>
                ))}
            </span>
        </div>
    );
}
