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
        company: "Infosys",
        period: "Nov 2022 — Present",
        stack: ["Java", "Spring Boot", "AWS", "PostgreSQL"],
        summary:
            "Worked as a Developer and Lead with Clients, Requirement Gathering, Handeling offshore teams, and delivering high-quality software solutions.",
        roles: [
            { title: "Senior Developer (Onsite)", period: "Apr 2025 — Present", location: "London, UK" },
            { title: "Backend Developer", period: "Nov 2022 — Apr 2025", location: "Indore, India" }
        ],
        points: [
            "Architected and delivered a scalable, real-time vehicle pricing platform with Java, Spring Boot, and AWS.",
            "Engineered a concurrent synchronization mechanism to ensure data consistency across distributed services.",
            "Designed and implemented a AI based health monitoring system for microservices, reducing downtime by 30%.",
        ],
    },
    {
        company: "Tata Consultancy Services",
        period: "Jul 2021 — Nov 2022",
        stack: ["Java", "Spring Boot", "AWS", "Kafka", "Cassandra"],
        summary:
            "Worked as a Backend Developer on a BFSI project, focusing on building and maintaining microservices, integrating with Kafka for event streaming, and optimizing system performance.",
        roles: [
            { title: "Assistant System Engineer", period: "Jul 2021 — Nov 2022", location: "Pune, India" },
        ],
        points: [
            "Built and maintained a robust microservices backend, responsible for Rewards & Loyalty modules.",
            "Worked on resolving Intermittent Connection issues with 3rd PArty APIS, Implemented a retry mechanism and improved error handling, resulting in a 40% reduction in failed transactions.",
            "Optimized database queries and implemented caching strategies, improving response times by 25%.",
        ],
    },
];

// Occasional writing lives on an external page ("Capsule").
// Set the URL below to your blog / knowledge base once it's ready.
export const capsuleUrl = "#";

export const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Powers", href: "#skills" },
    { label: "Sagas", href: "#experience" },
    { label: "Battles", href: "#projects" },
    { label: "Capsule", href: capsuleUrl, external: true },
    { label: "Contact", href: "#contact" },
];
