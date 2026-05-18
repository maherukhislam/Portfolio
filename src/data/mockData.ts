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
    eyebrow: "Student Leader & Systems Builder",
    title: "Md. Maherukh Islam",
    highlightedText: "Maherukh Islam",
    description:
      "A Bangladeshi student leader, developer, and systems-oriented builder combining engineering, technology, science, organizational leadership, environmental awareness, and digital infrastructure development to contribute toward long-term institutional modernization and national impact.",
    primaryAction: { href: "#projects", label: "View Projects" },
    secondaryAction: { href: "#achievements", label: "View Credentials" },
    photo: {
      fileName: "profile-photo.jpg",
      alt: "Portrait of Maherukh Islam",
      badge: "Systems Leadership",
    },
    visualLabel: "Profile Signal",
    visualText: "Engineering, scientific competition, branding, and institutional systems thinking.",
  } as const,
  highlights: {
    eyebrow: "Overview",
    title: "Quick Highlights",
    items: [
      {
        icon: "PHY",
        title: "BDOC Physics Olympiad",
        description:
          "Finalist in 2025, indicating strong conceptual understanding, mathematical reasoning, persistence under competition, and scientific aptitude.",
        tag: "Finalist",
        tagVariant: "teal",
      },
      {
        icon: "EAR",
        title: "National Earth Olympiad",
        description:
          "Divisional Topper in 2025 by Bangladesh Youth Environmental Initiative, reflecting environmental awareness and interdisciplinary interest.",
        tag: "Divisional Topper",
        tagVariant: "teal",
      },
      {
        icon: "</>",
        title: "Institutional Builder",
        description:
          "Developed the DCCNSC website and financial reporting systems, demonstrating real-world implementation ability and organizational management capability.",
        tag: "Systems",
      },
      {
        icon: "A11Y",
        title: "Leadership & Discipline",
        description:
          "Cadet Lance Corporal at BNCC and trained in UNICEF Web Accessibility, focusing on usability, equity, and organizational adaptability.",
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
        phase: "Phase 01: Systems Thinking",
        title: "Builder Mentality",
        description:
          "Naturally thinking in structures and long-term scalability. Preferring to create, implement, organize, and improve active systems over passive participation.",
        tone: "teal",
      },
      {
        phase: "Phase 02: Hybrid Capability",
        title: "Interdisciplinary Execution",
        description:
          "Combining engineering interest, leadership, design, communication, organizational thinking, and scientific engagement to build complete, functional digital infrastructure.",
        tone: "primary",
      },
      {
        phase: "Phase 03: Mission-Oriented",
        title: "Long-Term Ambition",
        description:
          "Goals consistently involve national contribution, modernization, technology-driven improvement, and creating tools with genuine institutional impact.",
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
        "Served as a Cadet Lance Corporal, building discipline, structured teamwork, leadership training, chain-of-command experience, and organizational adaptability.",
      tags: ["Cadet Lance Corporal", "Discipline", "Service"],
    } as const,
  } as const,
  skills: {
    id: "skills",
    title: "Technical Arsenal.",
    description:
      "A practical capability map across development, design, systems thinking, communication, and the deeper technical specialization I am building next.",
    groups: [
      { icon: "</>", title: "Development", items: ["HTML & CSS", "PHP", "Tailwind CSS", "WordPress CMS", "React", "Next.js"] },
      { icon: "UX", title: "Design", items: ["UI/UX", "Branding Systems", "Cinematic Presentation", "Storytelling"] },
      { icon: "SYS", title: "Systems & Thinking", items: ["Systems Thinking", "Builder Mentality", "Mission-Oriented", "Financial workflows", "Accessibility"] },
    ] as const satisfies readonly SkillGroup[],
    futureLearning: {
      icon: "AI",
      title: "Future Specialization",
      description: "Deepening technical specialization after building a broad interdisciplinary foundation.",
      tags: ["AI Systems", "Cybersecurity", "Mathematics", "Software Architecture", "Computer Science"],
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
      { label: "Email", value: "maherukhislam2007@gmail.com", href: "mailto:maherukhislam2007@gmail.com" },
      { label: "GitHub", value: "github.com/maherukh", href: "https://github.com/maherukh" },
      { label: "LinkedIn", value: "in/md-maherukh-islam", href: "https://www.linkedin.com/in/md-maherukh-islam/" },
      { label: "Facebook", value: "fb.com/Maherukhislamastha", href: "https://www.facebook.com/Maherukhislamastha" },
    ] as const satisfies readonly ContactLink[],
    dossier: {
      icon: "CV",
      title: "Professional Dossier",
      description: "Review full academic and professional history.",
      actionLabel: "View Professional Dossier",
    } as const,
  } as const,
  footer: {
    name: "Maherukh Islam",
    tagline: "(c) 2024 Maherukh Islam. Engineered for Innovation.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/md-maherukh-islam/" },
      { label: "GitHub", href: "https://github.com/maherukh" },
      { label: "Resume", href: "#contact" },
    ] as const,
  } as const,
} as const;
