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
    { href: "#skills", label: "Skills" },
    { href: "#vision", label: "Vision" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Get in Touch", isCta: true },
  ] as const satisfies readonly NavItem[],
  hero: {
    id: "home",
    eyebrow: "Overview",
    title: "Building systems, ideas, and digital experiences.",
    highlightedText: "and digital experiences.",
    description:
      "Multidisciplinary student innovator building meaningful digital systems and preparing for a future in engineering, technology, and impactful innovation.",
    primaryAction: { href: "#projects", label: "View Projects" },
    secondaryAction: { href: "#about", label: "About Me" },
    photo: {
      fileName: "profile-photo.jpg",
      alt: "Portrait of Maherukh Islam",
      badge: "Student Innovator",
    },
    visualLabel: "Innovation Lab",
    visualText: "Systems, research, and engineered products.",
  } as const,
  highlights: {
    eyebrow: "Overview",
    title: "Quick Highlights",
    items: [
      {
        icon: "PHY",
        title: "Physics Olympiad",
        description:
          "National finalist demonstrating strong analytical and problem-solving capabilities.",
        tag: "Achievement",
        tagVariant: "teal",
      },
      {
        icon: "EAR",
        title: "Earth Olympiad",
        description:
          "Recognized for comprehensive understanding of environmental systems and earth sciences.",
        tag: "Recognition",
        tagVariant: "teal",
      },
      {
        icon: "</>",
        title: "Web Developer",
        description:
          "Lead developer for institutional clubs, architecting digital presences from scratch.",
        tag: "Role",
      },
      {
        icon: "SYS",
        title: "System Builder",
        description:
          "Creating organized, scalable digital workflows and interactive experiences.",
        tag: "Core Skill",
      },
    ] as const satisfies readonly HighlightItem[],
  } as const,
  about: {
    id: "about",
    eyebrow: "Mindset",
    title: "Engineering with intent.",
    highlightedText: "Building for impact.",
    description:
      "I believe in the convergence of rigorous systems design and human-centric usability. My approach to engineering is rooted in unyielding curiosity and a fundamental desire to construct elegant, scalable solutions to complex, real-world problems.",
    narrativeTitle: "The Narrative",
    timeline: [
      {
        phase: "Phase 01: Inception",
        title: "Curiosity & Systems",
        description:
          "It started with an obsession to understand how things connect. Before writing code, I spent years deconstructing analog systems, searching for the underlying logic that governed their behavior. This structural thinking naturally translated into the digital realm, where code became the ultimate tool to build logic from scratch.",
        tone: "teal",
      },
      {
        phase: "Phase 02: Execution",
        title: "Web Architecture",
        description:
          "The transition to web development was driven by the desire for immediate, tangible impact. I focused on mastering the full stack, not just to build interfaces, but to architect robust, scalable backends that could handle complex data flows. My work became characterized by clean architecture, performance, security, and maintainability over fleeting trends.",
        tone: "primary",
      },
    ] as const satisfies readonly TimelineItem[],
    quote:
      "Technology should solve meaningful problems. Systems matter more than appearances.",
    focusCards: [
      {
        icon: "ENG",
        title: "Core Engineering",
        description:
          "Advancing the structural integrity of web applications. Pushing the boundaries of performance and creating architectures that anticipate future scaling requirements.",
      },
      {
        icon: "AI",
        title: "Applied AI",
        description:
          "Integrating machine learning models into pragmatic workflows. Exploring how deterministic systems and probabilistic models can coexist to automate cognitive tasks.",
      },
      {
        icon: "ECO",
        title: "Green Tech",
        description:
          "Applying computational power to environmental challenges. Optimizing resource allocation systems and developing software that minimizes digital carbon footprints.",
      },
    ] as const satisfies readonly CardItem[],
  } as const,
  projects: {
    id: "projects",
    eyebrow: "Portfolio",
    title: "Engineered",
    highlightedText: "Innovations",
    description:
      "A curated selection of technical solutions and design systems built to solve complex organizational problems with premium minimalism and high-performance architecture.",
    featured: {
      title: "DCCNSC Website",
      description:
        "A comprehensive digital overhaul focusing on user-centric design and robust technical architecture to modernize the organization's online presence.",
      problem:
        "Problem solved: Outdated information architecture and fractured brand identity unified into a seamless digital experience.",
      tags: ["Branding", "UI/UX", "Technical Implementation"],
      mediaClass: "project__media--radar",
    } as const satisfies ProjectItem,
    secondary: [
      {
        title: "Financial Reporting System",
        description:
          "An internal tool engineered to streamline financial data processing, reducing report generation time by 40% through automated workflows and intuitive data visualization.",
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
      "A curated record of academic excellence, professional development, and leadership commitments engineered for continuous growth and impactful innovation.",
    science: [
      {
        icon: "PHY",
        title: "BDOC Physics Olympiad",
        meta: "Finalist",
        description:
          "Demonstrated advanced problem-solving capabilities and deep understanding of theoretical physics concepts among top national competitors.",
      },
      {
        icon: "EAR",
        title: "National Earth Olympiad",
        meta: "Official Recognition",
        description:
          "Acknowledged for exceptional knowledge in earth sciences, environmental systems, and analytical reasoning on a national platform.",
        metaTone: "blue",
      },
    ] as const satisfies readonly AwardItem[],
    training: [
      {
        title: "Web Accessibility Training",
        meta: "UNICEF",
        description:
          "Comprehensive certification focusing on WCAG standards, inclusive digital design principles, and building universally accessible web interfaces.",
        metaTone: "blue",
      },
      {
        title: "Workplace Communication",
        meta: "Essentials Masterclass",
        description:
          "Advanced training in cross-functional collaboration, technical articulation, and effective professional discourse.",
      },
    ] as const satisfies readonly AwardItem[],
    leadership: {
      eyebrow: "Extracurricular",
      title: "Bangladesh National Cadet Corps (BNCC)",
      description:
        "Cultivated rigorous discipline, strategic teamwork, and leadership skills through structured training and national service initiatives. This experience fundamentally shaped an approach to organized problem-solving and resilience in high-pressure environments.",
      tags: ["Leadership", "Discipline", "Team Architecture"],
    } as const,
  } as const,
  skills: {
    id: "skills",
    title: "Technical Arsenal.",
    description:
      "A comprehensive breakdown of my engineering capabilities, design competencies, and strategic thinking methodologies.",
    groups: [
      { icon: "</>", title: "Development", items: ["HTML", "CSS", "React", "Next.js", "PHP", "Tailwind"] },
      { icon: "UX", title: "Design", items: ["UI/UX", "Branding", "Motion Design"] },
      { icon: "SYS", title: "Systems & Thinking", items: ["Problem solving", "Organization", "Strategy"] },
    ] as const satisfies readonly SkillGroup[],
    futureLearning: {
      icon: "AI",
      title: "Future Learning",
      description: "Exploring the frontier of technology.",
      tags: ["AI Engineering", "Robotics", "Cybersecurity"],
    } as const,
  } as const,
  vision: {
    id: "vision",
    eyebrow: "Core Philosophy",
    title:
      "I believe technology becomes meaningful when it improves systems, expands access, and creates long-term positive impact.",
    support:
      "Building the future requires more than elegant code. It demands a rigorous understanding of the systems we disrupt and a commitment to engineering solutions that elevate human potential.",
    cards: [
      {
        title: "Engineering for Scale & Humanity",
        description:
          "True innovation lies at the intersection of robust architecture and empathetic design. Every product is a living system that must scale efficiently while remaining intuitively accessible to the end user.",
        tags: ["Systemic Design", "Inclusive Access"],
      },
      {
        icon: "CLN",
        title: "Elegant Codebases",
        description: "Maintainability over cleverness. Clarity over complexity.",
      },
      {
        icon: "GLB",
        title: "Global Impact",
        description: "Building tools that transcend geographical and technical borders.",
      },
    ] as const,
    cta: {
      title: "Ready to build the future?",
      description: "Let's collaborate on systems that matter.",
      action: { href: "#contact", label: "Start a Conversation" },
    } as const,
  } as const,
  contact: {
    id: "contact",
    eyebrow: "Currently available for research collaborations.",
    title: "Initiate Contact",
    description:
      "Whether you have a question, a proposal, or just want to discuss the future of technology, my inbox is open.",
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
