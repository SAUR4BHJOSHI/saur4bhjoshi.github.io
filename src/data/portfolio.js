// ============================================================
// EDITABLE CONTENT — change everything about your portfolio here
// ============================================================

export const profile = {
    name: "Saurabh",
    role: "Full-Stack Developer & Code Saiyan",
    tagline:
        "I build powerful web experiences with the intensity of a Kamehameha and the precision of a Saiyan warrior.",
    powerLevel: "OVER 9000",
};

export const about = {
    photo: "", // put an image path in /public and reference it, e.g. "/me.jpg"
    paragraphs: [
        "Write your bio here. Where you come from, what drives you, and the kind of developer warrior you are.",
        "Just like the Z Fighters, I believe in constant training — always leveling up my skills and pushing past my limits.",
    ],
    facts: [
        { label: "Location", value: "Earth (remote friendly)" },
        { label: "Focus", value: "Web apps & UI" },
        { label: "Fuel", value: "Coffee & Senzu beans" },
    ],
};

// power = 0..100
export const skills = [
    { name: "Frontend", power: 90, desc: "HTML, CSS, JavaScript, React" },
    { name: "Backend", power: 80, desc: "Node.js, APIs, Databases" },
    { name: "Tools", power: 85, desc: "Git, Docker, CI/CD" },
    { name: "Design", power: 70, desc: "Figma, UI/UX, Animation" },
];

export const projects = [
    {
        title: "Project One",
        desc: "Short description of the project and the tech you used.",
        tags: ["React", "Node"],
        link: "#",
    },
    {
        title: "Project Two",
        desc: "Short description of the project and the tech you used.",
        tags: ["CSS", "JS"],
        link: "#",
    },
    {
        title: "Project Three",
        desc: "Short description of the project and the tech you used.",
        tags: ["API", "DB"],
        link: "#",
    },
];

export const socials = [
    { label: "GitHub", url: "#" },
    { label: "LinkedIn", url: "#" },
    { label: "Twitter", url: "#" },
];

export const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Powers", href: "#skills" },
    { label: "Battles", href: "#projects" },
    { label: "Contact", href: "#contact" },
];
