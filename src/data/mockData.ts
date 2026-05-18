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
  link?: string;
  imageUrl?: string;
}>;

export type EducationItem = Readonly<{
  institution: string;
  period: string;
  degree: string;
  focus: string;
  subjects: readonly string[];
  icon: string;
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
    { href: "#education", label: "Education" },
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
  education: {
    id: "education",
    title: "Educational Journey",
    highlightedText: "Journey",
    description: "Academic profile, subjects studied, and core areas of STEM-oriented reasoning and analytical focus.",
    items: [
      {
        institution: "Dhaka Commerce College",
        period: "2024 - Present (HSC 2026)",
        degree: "Higher Secondary Certificate (HSC) - Class XII",
        focus: "Preparing for HSC 2026 with an academic track leaning strongly toward physics, mathematics, and technology-oriented systems.",
        subjects: ["Higher Math", "Physics", "Chemistry", "Biology", "ICT", "English", "Bangla"],
        icon: "DCC",
      },
      {
        institution: "Secondary School Certificate",
        period: "Completed 2024 (SSC)",
        degree: "Secondary School Certificate - Science Division",
        focus: "Completed secondary education with strong foundations in mathematics and logical analysis.",
        subjects: ["General Science", "Higher Math", "ICT", "Physics", "Chemistry", "Biology"],
        icon: "SSC",
      }
    ] as const satisfies readonly EducationItem[],
    academicInterests: {
      title: "STEM & Analytical Focus",
      description: "My academic interests strongly center on STEM fields, engineering, analytical reasoning, and technology-oriented problem solving. I treat academic learning not just as memorization, but as the conceptual framework for building physical and digital tools.",
      tags: ["STEM", "Engineering", "Analytical Reasoning", "Systems Thinking", "Technology"],
    } as const,
  } as const,
  projects: {
    id: "projects",
    eyebrow: "Portfolio",
    title: "Engineered",
    highlightedText: "Innovations",
    description:
      "A curated selection of technical and organizational systems built to modernize information, reduce manual friction, and improve institutional workflows.",
    featured: {
      title: "DCCNSC Official Website",
      description:
        "A comprehensive digital overhaul for the Dhaka Commerce College Nature Study Club, connecting environmental work, club identity, and accessible information architecture.",
      problem:
        "Problem solved: Outdated information architecture and fractured brand identity unified into a seamless digital experience at dccnsc.org.",
      tags: ["Branding", "UI/UX", "Technical Implementation"],
      mediaClass: "project__media--radar",
      link: "https://dccnsc.org",
      imageUrl: "/dccnsc-preview.png",
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
        imageUrl: "/finance-preview.png",
      },
      {
        title: "QuantumLeap WordPress Theme",
        description:
          "A highly optimized custom WordPress theme built entirely on modern utility-first CSS principles, featuring dedicated hero sections, a blogging engine, experiments showcase, and a slick Tailwind-based frontend structure.",
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
          "National-level finalist, indicating strong conceptual understanding, mathematical reasoning, persistence under competition, and scientific aptitude.",
      },
      {
        icon: "EAR",
        title: "National Earth Olympiad",
        meta: "Divisional Topper / 2025",
        description:
          "Selected as a Divisional Topper by the Bangladesh Youth Environmental Initiative (BYEI), reflecting environmental awareness, scientific engagement, and interdisciplinary academic recognition.",
        metaTone: "blue",
      },
    ] as const satisfies readonly AwardItem[],
    training: [
      {
        title: "Web Accessibility Training",
        meta: "UNICEF / Agora",
        description:
          "Training in inclusive digital design, accessibility standards (WCAG), and ethical, user-centered technology development.",
        metaTone: "blue",
      },
      {
        title: "Workplace Communication Essentials",
        meta: "Passport to Earning Bangladesh",
        description:
          "Completed professional readiness training focused on leadership communication, workplace readiness, collaboration, and executive presence.",
      },
    ] as const satisfies readonly AwardItem[],
    leadership: {
      eyebrow: "Extracurricular & Trust",
      title: "Bangladesh National Cadet Corps (BNCC)",
      description:
        "Promoted to Cadet Lance Corporal, building discipline, physical and mental endurance, leadership under a structured chain-of-command, and organizational adaptability.",
      tags: ["Cadet Lance Corporal", "Discipline", "Leadership", "Service"],
    } as const,
  } as const,
  skills: {
    id: "skills",
    title: "Technical Arsenal.",
    description:
      "A practical capability map across development, design, systems thinking, communication, and the deeper technical specialization I am building next.",
    groups: [
      { icon: "</>", title: "Web Engineering & CMS", items: ["Tailwind CSS", "HTML & CSS", "PHP & XAMPP", "WordPress Theme Dev", "CMS Customization", "Vercel Deployments", "React & Next.js"] },
      { icon: "UX", title: "Creative & Copy", items: ["UI/UX Design", "Branding Systems", "Cinematic Presentation", "Immersive UX", "Workplace Communication", "Authentic Writing"] },
      { icon: "SYS", title: "Systems & Leadership", items: ["Systems Thinking", "Builder Mentality", "Club Treasury Control", "Financial Reporting Systems", "UNICEF Accessibility", "BNCC Command Experience"] },
    ] as const satisfies readonly SkillGroup[],
    futureLearning: {
      icon: "AI",
      title: "Future Specialization",
      description: "Deepening technical specialization after building a broad interdisciplinary foundation.",
      tags: ["AI Systems", "Software Architecture", "Cybersecurity", "Computer Science", "Advanced Math"],
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
        title: "Engineering for Scale & Modernization",
        description:
          "Aspiring to become an engineer and inventor, contributing technological innovations to Bangladesh, modernizing institutions through AI, and potentially contributing to military digitalization.",
        tags: ["Systems Engineering", "AI Modernization", "Institutional Impact"],
      },
      {
        icon: "CLN",
        title: "Deep Technical Growth",
        description: "Preparing for ISSB after HSC and pursuing engineering university admissions, focusing on AI systems, cybersecurity, advanced math, and computer science fundamentals.",
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
