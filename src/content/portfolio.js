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
        "Like a Saiyan who grows stronger after every battle, I'm a Backend Engineer with 5+ years of IT experience and a passion for building scalable, high-performance systems. Driven by a deep interest in distributed architectures, I power up Spring Boot microservices, channel event-driven pipelines with Kafka, and deploy containerised services across the AWS cloud.",
        "From REST APIs to EKS/ECS, Lambda, and messaging services, I engineer reliable, production-ready solutions built to withstand any power level. True to my Saiyan spirit, I thrive on complex challenges — diving headfirst into ideas and pushing past my limits to turn them into implementable realities. 💡",
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
    { name: "Kafka", icon: "/logos/kafka.svg", power: 78 },
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
// Collapsed cards show title + period + stack; click to expand details.
export const experience = [
    {
        title: "Technology Consultant",
        company: "Infosys",
        period: "Nov 2022 — Present",
        location:
            "London, UK (on-site, Apr 2025 — Present) · Indore, India (Nov 2022 — Apr 2025)",
        stack: ["Java", "Spring Boot", "AWS EKS/ECS", "Kafka", "SQS/SNS", "REST APIs", "GitHub Actions"],
        summary:
            "Microservices-based platform for a manufacturing client, built and deployed on AWS — serving internal teams, dealers and third-party systems.",
        points: [
            "Work directly with the client to gather requirements, and lead an offshore team — managing work allocation, deliverables, code quality and releases.",
            "Designed and developed a high-throughput Lead Generation & Ingestion Service for ingestion, segregation, distribution and analysis — the single source of truth for global dealer lead data, delivered in record time.",
            "Built and maintained the UK Vehicle Pricing Service — price calculation, versioning, distribution and extraction for internal users, dealers and third-party systems.",
            "Developed Spring Boot microservices and REST APIs, deployed as containers on AWS EKS and ECS.",
            "Built event-driven workflows using Apache Kafka and SQS/SNS for reliable data distribution between services.",
            "Supported CI/CD releases with GitHub Actions and handled production support.",
        ],
    },
    {
        title: "Asst. Systems Engineer",
        company: "Tata Consultancy Services",
        period: "Jul 2021 — Nov 2022",
        location: "Pune, India",
        stack: ["Java", "Spring Boot", "REST APIs", "Resilience4j"],
        summary:
            "Java & Spring Boot services for the Loyalty & Rewards platform of a banking client.",
        points: [
            "Developed and maintained Java and Spring Boot services for the Loyalty & Rewards platform of a banking client.",
            "Resolved a recurring, critical timeout issue with third-party services by implementing a dedicated circuit breaker and retry path using Resilience4j.",
            "Built and enhanced REST APIs — development, unit testing, bug fixing and production support.",
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
