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

export type CaseStudy = Readonly<{
  problem: string;
  role: string;
  solution: string;
  impact: string;
  technologies: readonly string[];
  challenges: string;
}>;

export type ProjectItem = Readonly<{
  title: string;
  description: string;
  tags: readonly string[];
  variant?: "default" | "teal";
  mediaClass?: string;
  link?: string;
  imageUrl?: string;
  caseStudy?: CaseStudy;
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

export type LeadershipItem = Readonly<{
  role: string;
  organization: string;
  period: string;
  impact: string;
  details: readonly string[];
  icon: string;
}>;

export type MetricItem = Readonly<{
  value: string;
  label: string;
  description: string;
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
    { href: "#achievements", label: "Credentials" },
    { href: "#skills", label: "Skills" },
    { href: "#vision", label: "Vision" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Get in Touch", isCta: true },
  ] as const satisfies readonly NavItem[],
  hero: {
    id: "home",
    eyebrow: "Systems Builder & Platoon Leader",
    title: "Md. Maherukh Islam",
    highlightedText: "Maherukh Islam",
    description:
      "Engineering-focused student leader passionate about technology, systems, organizational infrastructure, and digital modernization. Combining scientific analytical reasoning, military cadet discipline, and accessible technology to build practical infrastructure with real institutional value.",
    primaryAction: { href: "#projects", label: "View Case Studies" },
    secondaryAction: { href: "#achievements", label: "View Credentials" },
    photo: {
      fileName: "profile-photo.jpg",
      alt: "Md. Maherukh Islam Portrait",
      badge: "Systems & Leadership",
    },
    visualLabel: "Operational Identity",
    visualText: "Building digital pipelines, local ledger databases, and leading platoon modernization.",
  } as const,
  highlights: {
    eyebrow: "Operational Focus",
    title: "What I Actually Do",
    statement: "I build digital systems, websites, and organizational infrastructure for student communities and institutions. My work combines technology, leadership, and systems thinking to create practical real-world solutions.",
    philosophy: "I believe technology becomes meaningful when it improves real-world organization, communication, accessibility, and operational efficiency. My work focuses on building practical systems that strengthen communities and institutions.",
    currentMission: [
      "STEM & Systems Engineering preparation",
      "Institutional and community digitalization",
      "Accessibility-first compliant development",
      "Student organizational support software",
      "Advanced competitive scientific reasoning"
    ] as const,
    metrics: [
      {
        value: "Audit: <1s",
        label: "Treasury Ledger Speed",
        description: "Replaced 3-day manual spreadsheets with immediate, error-free database synchronization.",
      },
      {
        value: "120+",
        label: "Digitized Club Members",
        description: "Developed and managed direct digital ledger records for Dhaka Commerce College Nature Study Club.",
      },
      {
        value: "25+",
        label: "Modernized Club Pages",
        description: "Engineered responsive, highly optimized core views and secure administrative portals.",
      },
      {
        value: "LCpl Squad",
        label: "BNCC Squad Command",
        description: "Cadet Lance Corporal leading drill coordination, emergency readiness, and platoons.",
      }
    ] as const satisfies readonly MetricItem[],
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
      tags: ["Branding", "UI/UX", "Technical Implementation"],
      mediaClass: "project__media--radar",
      link: "https://dccnsc.org",
      imageUrl: "/dccnsc-preview.png",
      caseStudy: {
        problem: "Outdated and fractured web presence for a prominent DCC club, causing major communications gap for over 1,000+ students.",
        role: "Lead Full-Stack Systems Architect",
        solution: "Engineered and deployed a unified, responsive central club portal at dccnsc.org from the ground up.",
        impact: "Connected student directories, automated notices, integrated YouTube media assets, and established clear institutional presence.",
        technologies: ["PHP", "CSS", "MySQL", "JavaScript", "Responsive Systems"],
        challenges: "Ensuring cross-device compatibility and maintaining college server guidelines while keeping loading times under 1.5 seconds.",
      },
    } as const satisfies ProjectItem,
    secondary: [
      {
        title: "Financial Reporting System",
        description:
          "An internal tool engineered from treasury experience to streamline financial data processing, reduce reporting friction, and make organizational finance easier to manage.",
        tags: ["Process Organization", "Efficiency"],
        mediaClass: "project__media--code",
        imageUrl: "/finance-preview.png",
        caseStudy: {
          problem: "Club treasury ledgers were physical or basic spreadsheet files, causing data delays and auditing latencies of up to 3 days.",
          role: "Executive Treasurer & Systems Engineer",
          solution: "Built a customized secure local database sync utility and financial ledger processing interface.",
          impact: "Eliminated manual ledger errors entirely; reduced institutional financial statement audit duration from 3 days to under 1 second.",
          technologies: ["PHP", "SQLite", "CSS", "Vite Environment", "Treasury Scripts"],
          challenges: "Ensuring the interface layout is highly intuitive so that future student treasurers can manage sync operations without DB training.",
        },
      },
      {
        title: "QuantumLeap WordPress Theme",
        description:
          "A highly optimized custom WordPress theme built entirely on modern utility-first CSS principles, featuring dedicated hero sections, a blogging engine, experiments showcase, and a slick Tailwind-based frontend structure.",
        tags: ["Tailwind CSS", "Frontend Engineering", "WordPress"],
        variant: "teal",
        caseStudy: {
          problem: "Legacy WordPress theme systems are heavy, bloated with unused libraries, and perform poorly on mobile viewports.",
          role: "Frontend Themes Engineer",
          solution: "Designed a clean, custom WordPress theme structure styled purely with responsive utility grids.",
          impact: "Cut core stylesheet footprint by 80% and achieved near-perfect performance grades across speed monitoring checkers.",
          technologies: ["PHP & WordPress APIs", "Tailwind Utility CSS", "Semantic HTML5", "Vercel Deployments"],
          challenges: "Striking a perfect balance between flexible admin content editing controls and high performance frontend rendering.",
        },
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
    title: "Credentials & Endorsements",
    highlightedText: "Credentials",
    description:
      "Academic milestones, technical training, and leadership credentials displaying interdisciplinary rigor across science, environment, accessibility, and service.",
    science: [
      {
        icon: "PHY",
        title: "BDOC Physics Olympiad",
        meta: "National Finalist / 2025",
        description:
          "National-level finalist, indicating deep conceptual understanding, mathematical reasoning, persistence under competition, and analytical scientific aptitude.",
      },
      {
        icon: "EAR",
        title: "National Earth Olympiad",
        meta: "Divisional Topper / 2025",
        description:
          "Recognized as the Divisional Topper by the Bangladesh Youth Environmental Initiative (BYEI), proving mastery in ecological geology, earth sciences, and sustainability.",
        metaTone: "blue",
      },
    ] as const satisfies readonly AwardItem[],
    training: [
      {
        title: "Web Accessibility (UNICEF Agora)",
        meta: "Verified Certification / 2025",
        description:
          "Completed comprehensive training in inclusive web design, WCAG standards, keyboard navigational accessibility, and user-equity in technology.",
        metaTone: "blue",
      },
      {
        title: "Workplace Communication Essentials",
        meta: "Passport to Earning (P2E) Bangladesh",
        description:
          "Completed professional readiness certification focused on leadership communication, team synergy, logical writing, and executive presence.",
      },
    ] as const satisfies readonly AwardItem[],
    leadershipLogs: [
      {
        role: "Executive Treasurer",
        organization: "DCC Nature Study Club",
        period: "2024 - Present",
        impact: "Transitioned spreadsheet logs into a secure database-backed local synchronization ledger.",
        details: [
          "Oversaw capital flow, event allocations, and the club's annual operating budgets",
          "Designed automated database statement scripts reducing ledger audit time from 3 days to under 1 second",
          "Architected and deployed the official club portal (dccnsc.org) to host student documentation"
        ],
        icon: "FIN",
      },
      {
        role: "Cadet Lance Corporal",
        organization: "Bangladesh National Cadet Corps (BNCC)",
        period: "2024 - Present",
        impact: "Commanded platoon drills, physical readiness, and digital Platoon coordination.",
        details: [
          "Promoted to LCpl based on discipline, command authority, and military disaster response training",
          "Led platoon squad movements, physical readiness programs, and community support drills",
          "Digitized Cadet records and tactical communications coordination for DCC BNCC Platoon"
        ],
        icon: "BNCC",
      },
      {
        role: "Environmental Executive",
        organization: "Earth & Nature Initiatives",
        period: "2024 - Present",
        impact: "Led Divisional Earth Olympiad programs and spearheaded campus ecology workshops.",
        details: [
          "Organized college recycling camps and campus environmental preservation campaigns",
          "Mentored college science students in environmental geology and sustainability research",
          "Coordinated DCC Nature study excursions and scientific project exhibitions"
        ],
        icon: "EARTH",
      }
    ] as const satisfies readonly LeadershipItem[],
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
    tagline: "(c) 2026 Maherukh Islam. Engineered for Innovation.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/md-maherukh-islam/" },
      { label: "GitHub", href: "https://github.com/maherukh" },
      { label: "Resume", href: "#contact" },
    ] as const,
  } as const,
};
