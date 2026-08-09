// ============================================================
// EDITABLE CONTENT — change everything about your portfolio here
// ============================================================

export const profile = {
    name: "Saurabh",
    role: "Z-Warrior | Backend Developer",
    stack: "Java · Spring Boot · AWS",
    powerLevel: "OVER 9000",
};

export const about = {
    photo: "", // put an image path in /public and reference it, e.g. "/me.jpg"
    paragraphs: [
        "Like a Saiyan who grows stronger after every battle, I'm a backend developer with 5+ years of experience building robust, scalable systems in Java & Spring Boot on AWS.",
        "I'm a relentless learner — always chasing new technologies and sharper ways to design software. If there's a hard problem or a system that needs to scale, you can bet I'll be sinking my teeth into it. 💡",
    ],
    facts: [
        { label: "Class", value: "Backend Developer" },
        { label: "Experience", value: "5+ years in battle" },
        { label: "Techniques", value: "Java · Spring Boot · AWS" },
    ],
};

// Each skill shows its logo, name, and a ki power bar (power = 0..100).
export const skills = [
    { name: "Java", icon: "/logos/java.svg", power: 92 },
    { name: "Spring Boot", icon: "/logos/spring.svg", power: 90 },
    { name: "AWS", icon: "/logos/aws.svg", power: 85 },
    { name: "PostgreSQL", icon: "/logos/postgres.svg", power: 82 },
    { name: "Docker", icon: "/logos/docker.svg", power: 80 },
    { name: "Redis", icon: "/logos/redis.svg", power: 75 },
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

// Work history shown as a DBZ "Battle Sagas" timeline. Newest first.
export const experience = [
    {
        role: "Senior Backend Developer",
        company: "Company Name",
        period: "2023 — Present",
        points: [
            "Lead the design of scalable microservices in Java & Spring Boot on AWS.",
            "Mentor developers and drive best practices across the team.",
        ],
    },
    {
        role: "Backend Developer",
        company: "Company Name",
        period: "2020 — 2023",
        points: [
            "Built and shipped REST APIs powering high-traffic systems.",
            "Optimized database performance and cut response times significantly.",
        ],
    },
    {
        role: "Junior Developer",
        company: "Company Name",
        period: "2019 — 2020",
        points: [
            "Started my training arc — learning Java, SQL, and clean architecture.",
        ],
    },
];

export const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Powers", href: "#skills" },
    { label: "Sagas", href: "#experience" },
    { label: "Battles", href: "#projects" },
    { label: "Contact", href: "#contact" },
];
