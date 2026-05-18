export type NavItem = Readonly<{
  href: string;
  label: string;
  isCta?: boolean;
}>;

export type HighlightItem = Readonly<{
  icon: string;
  title: string;
  description: string;
  tag: string;
  tagVariant?: "default" | "teal";
}>;

export type TimelineItem = Readonly<{
  phase: string;
  title: string;
  description: string;
  tone?: "teal" | "primary";
}>;

export type CardItem = Readonly<{
  icon: string;
  title: string;
  description: string;
}>;

export type ProjectItem = Readonly<{
  title: string;
  description: string;
  problem: string;
  tags: readonly string[];
  variant?: "default" | "teal";
  mediaClass?: string;
}>;

export type AwardItem = Readonly<{
  icon?: string;
  title: string;
  meta: string;
  description: string;
  metaTone?: "default" | "blue";
}>;

export type SkillGroup = Readonly<{
  icon: string;
  title: string;
  items: readonly string[];
}>;

export type ContactLink = Readonly<{
  label: string;
  value: string;
  href: string;
}>;

export const portfolioData = {
  navigation: [
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#skills", label: "Skills" },
    { href: "#vision", label: "Vision" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Get in Touch", isCta: true },
  ] as const satisfies readonly NavItem[],
  hero: {
    id: "home",
    eyebrow: "Student Leader / Systems Builder",
    title: "Md. Maherukh Islam",
    highlightedText: "Maherukh Islam",
    description:
      "A Bangladeshi student innovator combining engineering, science, environmental awareness, accessibility, and organizational leadership to build useful systems for long-term institutional impact.",
    primaryAction: { href: "#projects", label: "View Projects" },
    secondaryAction: { href: "#achievements", label: "View Credentials" },
    photo: {
      fileName: "profile-photo.jpg",
      alt: "Portrait of Maherukh Islam",
      badge: "Systems Leadership",
    },
    visualLabel: "Profile Signal",
    visualText: "Engineering, scientific competitions, accessibility, environment, and leadership.",
  } as const,
  highlights: {
    eyebrow: "Overview",
    title: "Quick Highlights",
    items: [
      {
        icon: "PHY",
        title: "BDOC Physics Olympiad",
        description:
          "Finalist in 2025, showing strong conceptual reasoning, mathematical thinking, and competitive STEM engagement.",
        tag: "Finalist",
        tagVariant: "teal",
      },
      {
        icon: "EAR",
        title: "National Earth Olympiad",
        description:
          "Divisional Topper recognition in 2025, connecting science literacy with environmental awareness.",
        tag: "Divisional Topper",
        tagVariant: "teal",
      },
      {
        icon: "</>",
        title: "Institutional Builder",
        description:
          "Building websites, reporting systems, and organized digital workflows for real organizations.",
        tag: "Systems",
      },
      {
        icon: "A11Y",
        title: "Inclusive Technology",
        description:
          "Trained in web accessibility through UNICEF Agora, with a focus on usability and digital equity.",
        tag: "Accessibility",
      },
    ] as const satisfies readonly HighlightItem[],
  } as const,
  about: {
    id: "about",
    eyebrow: "Profile Pattern",
    title: "Systems leadership.",
    highlightedText: "Built through evidence.",
    description:
      "My work sits at the intersection of technical implementation, scientific reasoning, environmental engagement, and organizational responsibility. I am most interested in building systems that make institutions clearer, faster, and more useful.",
    narrativeTitle: "The Narrative",
    timeline: [
      {
        phase: "Phase 01: Inception",
        title: "Scientific Curiosity",
        description:
          "Physics and earth science competitions strengthened the habit of asking how systems behave, why they fail, and what principles sit underneath visible outcomes. That scientific orientation now supports my engineering direction.",
        tone: "teal",
      },
      {
        phase: "Phase 02: Execution",
        title: "Digital Infrastructure",
        description:
          "Websites, WordPress systems, reporting workflows, and club operations became practical places to convert structure into working tools. The goal is not only to make things look better, but to make information and processes work better.",
        tone: "primary",
      },
      {
        phase: "Phase 03: Direction",
        title: "Responsible Technology",
        description:
          "Accessibility training, communication development, environmental work, and leadership roles are shaping a broader technical identity: engineering that is inclusive, operationally useful, and aware of civic impact.",
        tone: "teal",
      },
    ] as const satisfies readonly TimelineItem[],
    quote:
      "Strong systems turn ambition into something people can actually use.",
    focusCards: [
      {
        icon: "ENG",
        title: "Engineering & Technical Systems",
        description:
          "Website development, WordPress customization, reporting tools, UI/UX thinking, and practical digital infrastructure for organizations.",
      },
      {
        icon: "SCI",
        title: "Science & Analytical Capability",
        description:
          "Physics Olympiad finalist and Earth Olympiad divisional topper recognition, grounded in STEM reasoning and structured problem-solving.",
      },
      {
        icon: "ORG",
        title: "Leadership & Civic Awareness",
        description:
          "Treasury responsibility, BNCC discipline, accessibility training, environmental involvement, and communication development.",
      },
    ] as const satisfies readonly CardItem[],
  } as const,
  projects: {
    id: "projects",
    eyebrow: "Portfolio",
    title: "Engineered",
    highlightedText: "Innovations",
    description:
      "A curated selection of technical and organizational systems built to modernize information, reduce manual friction, and improve institutional workflows.",
    featured: {
      title: "DCCNSC Website",
      description:
        "A comprehensive digital overhaul for the Dhaka Commerce College Nature Study Club, connecting environmental work, club identity, and accessible information architecture.",
      problem:
        "Problem solved: Outdated information architecture and fractured brand identity unified into a seamless digital experience.",
      tags: ["Branding", "UI/UX", "Technical Implementation"],
      mediaClass: "project__media--radar",
    } as const satisfies ProjectItem,
    secondary: [
      {
      title: "Financial Reporting System",
      description:
          "An internal tool engineered from treasury experience to streamline financial data processing, reduce reporting friction, and make organizational finance easier to manage.",
        problem:
          "Problem solved: Manual data aggregation replaced with automated, error-free processing pipelines.",
        tags: ["Process Organization", "Efficiency"],
        mediaClass: "project__media--code",
      },
      {
        title: "QuantumLeap Theme",
        description:
          "A highly optimized WordPress theme built entirely on modern utility-first CSS principles, delivering perfect Lighthouse scores and uncompromised developer experience.",
        problem:
          "Problem solved: Heavy, slow legacy themes replaced with a lightning-fast, highly customizable modern framework.",
        tags: ["Tailwind CSS", "Frontend Engineering", "WordPress"],
        variant: "teal",
      },
    ] as const satisfies readonly ProjectItem[],
    loadingTitle: "Loading Innovations",
    loadingItems: [
      { icon: "AI", title: "AI Tooling Interfaces", description: "In Development" },
      { icon: "LAB", title: "Research Systems", description: "Concept Phase" },
      { icon: "ENV", title: "Environmental Dashboards", description: "Architecture Planning" },
    ] as const satisfies readonly CardItem[],
  } as const,
  achievements: {
    id: "achievements",
    title: "Milestones & Recognitions",
    highlightedText: "Recognitions",
    description:
      "Academic, professional, and leadership credentials that show a developing profile across science, technology, accessibility, communication, environment, and service.",
    science: [
      {
        icon: "PHY",
        title: "BDOC Physics Olympiad",
        meta: "Finalist / 2025",
        description:
          "Recognized as a finalist, reflecting strong conceptual reasoning, mathematical thinking, persistence, and competitive academic engagement.",
      },
      {
        icon: "EAR",
        title: "National Earth Olympiad",
        meta: "Divisional Topper / 2025",
        description:
          "Selected as a divisional topper for participation by the Bangladesh Youth Environmental Initiative, strengthening a profile of environmental literacy and science-driven thinking.",
        metaTone: "blue",
      },
    ] as const satisfies readonly AwardItem[],
    training: [
      {
        title: "Web Accessibility Training",
        meta: "UNICEF / Agora",
        description:
          "Training in inclusive digital design, usability, and responsible technology development, adding a professional accessibility mindset to web development work.",
        metaTone: "blue",
      },
      {
        title: "Workplace Communication",
        meta: "Passport to Earning Bangladesh",
        description:
          "Professional development focused on communication, workplace readiness, collaboration, and leadership-oriented self-development.",
      },
    ] as const satisfies readonly AwardItem[],
    leadership: {
      eyebrow: "Extracurricular",
      title: "Bangladesh National Cadet Corps (BNCC)",
      description:
        "Served as a Cadet Lance Corporal, building discipline, structured teamwork, leadership, and resilience through national service-oriented training.",
      tags: ["Cadet Lance Corporal", "Discipline", "Service"],
    } as const,
  } as const,
  skills: {
    id: "skills",
    title: "Technical Arsenal.",
    description:
      "A practical capability map across development, design, systems thinking, communication, and the deeper technical specialization I am building next.",
    groups: [
      { icon: "</>", title: "Development", items: ["HTML", "CSS", "React", "Next.js", "PHP", "Tailwind"] },
      { icon: "UX", title: "Design", items: ["UI/UX", "Branding", "Motion Design"] },
      { icon: "SYS", title: "Systems & Thinking", items: ["Problem solving", "Organization", "Strategy", "Financial workflows", "Accessibility"] },
    ] as const satisfies readonly SkillGroup[],
    futureLearning: {
      icon: "AI",
      title: "Future Learning",
      description: "Deepening technical specialization after building a broad interdisciplinary foundation.",
      tags: ["AI Systems", "Cybersecurity", "Mathematics", "Software Architecture"],
    } as const,
  } as const,
  vision: {
    id: "vision",
    eyebrow: "Core Philosophy",
    title:
      "I believe technology becomes meaningful when it improves systems, expands access, and creates long-term positive impact.",
    support:
      "Building the future requires more than elegant code. It demands scientific reasoning, communication, accessibility, environmental awareness, and the discipline to turn ideas into working infrastructure.",
    cards: [
      {
        title: "Engineering for Scale & Humanity",
        description:
          "True innovation sits where robust architecture, inclusive design, and organizational usefulness meet. Every product is a living system that must scale while remaining understandable to the people it serves.",
        tags: ["Systemic Design", "Inclusive Access", "Institutional Impact"],
      },
      {
        icon: "CLN",
        title: "Deep Technical Growth",
        description: "Building stronger foundations in programming, mathematics, AI systems, cybersecurity, and software architecture.",
      },
      {
        icon: "GLB",
        title: "National-Scale Ambition",
        description: "Using science, technology, and organizational leadership to contribute to long-term institutional modernization in Bangladesh.",
      },
    ] as const,
    cta: {
      title: "Ready to build the future?",
      description: "Let's collaborate on useful systems with real institutional value.",
      action: { href: "#contact", label: "Start a Conversation" },
    } as const,
  } as const,
  contact: {
    id: "contact",
    eyebrow: "Currently available for research collaborations.",
    title: "Initiate Contact",
    description:
      "Whether you have a collaboration idea, institutional project, research opportunity, or technology proposal, my inbox is open.",
    links: [
      { label: "Email", value: "hello@maherukh.com", href: "mailto:hello@maherukh.com" },
      { label: "GitHub", value: "github.com/maherukh", href: "https://github.com/maherukh" },
      { label: "LinkedIn", value: "in/maherukhislam", href: "https://www.linkedin.com/in/maherukhislam" },
      { label: "Facebook", value: "fb.com/maherukh", href: "https://fb.com/maherukh" },
    ] as const satisfies readonly ContactLink[],
    dossier: {
      icon: "CV",
      title: "Professional Dossier",
      description: "Review full academic and professional history.",
      actionLabel: "Download CV",
    } as const,
  } as const,
  footer: {
    name: "Maherukh Islam",
    tagline: "(c) 2024 Maherukh Islam. Engineered for Innovation.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/maherukhislam" },
      { label: "GitHub", href: "https://github.com/maherukh" },
      { label: "Resume", href: "#contact" },
    ] as const,
  } as const,
} as const;
