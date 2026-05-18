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

export type OperationalTimelineEntry = Readonly<{
  date: string;
  event: string;
  category: string;
  tone: "teal" | "primary";
}>;

export type TechStackGroup = Readonly<{
  category: string;
  items: readonly string[];
}>;

export type EngineeringNote = Readonly<{
  title: string;
  date: string;
  excerpt: string;
  tags: readonly string[];
}>;

export const portfolioData = {
  navigation: [
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#achievements", label: "Credentials" },
    { href: "#timeline", label: "Timeline" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Get in Touch", isCta: true },
  ] as const satisfies readonly NavItem[],
  hero: {
    id: "home",
    eyebrow: "Systems Builder & Student Leader",
    title: "Md. Maherukh Islam",
    highlightedText: "Maherukh Islam",
    description:
      "Student engineer building real digital infrastructure for organizations — web systems, treasury tooling, and accessible interfaces grounded in operational discipline and structured technical practice.",
    primaryAction: { href: "#projects", label: "View Case Studies" },
    secondaryAction: { href: "#achievements", label: "View Credentials" },
    photo: {
      fileName: "profile-photo.jpg",
      alt: "Md. Maherukh Islam Portrait",
      badge: "Systems & Leadership",
    },
    visualLabel: "Operational Identity",
    visualText: "Building digital pipelines, local ledger databases, and leading modernization.",
  } as const,
  highlights: {
    eyebrow: "Operational Focus",
    title: "What I Actually Do",
    statement: "I build digital systems, websites, and organizational infrastructure for student communities and institutions. My work combines technology, leadership, and systems thinking to create practical real-world solutions.",
    philosophy: "I believe technology becomes meaningful when it improves real-world organization, communication, accessibility, and operational efficiency. My work focuses on building practical systems that strengthen communities and institutions.",
    currentMission: [
      "Accessibility-first frontend systems",
      "Organizational digital infrastructure",
      "Engineering preparation & CS fundamentals",
      "STEM competition training",
      "Treasury workflow systems",
      "Web performance optimization"
    ] as const,
    metrics: [
      {
        value: "< 1s",
        label: "Treasury Audit Speed",
        description: "Replaced 3-day manual ledger reviews with sub-second query reports. Python + PLpgSQL pipeline deployed at finance.dccnsc.org.",
      },
      {
        value: "316",
        label: "DCCNSC Production Deploys",
        description: "Versioned production deployments of the official club portal — CI/CD-backed institutional infrastructure serving 120+ active members.",
      },
      {
        value: "144",
        label: "Finance System Releases",
        description: "Production releases of the DCC Nature Study Club Financial Management System at finance.dccnsc.org — active treasury infrastructure.",
      },
      {
        value: "LCpl",
        label: "BNCC Rank",
        description: "Promoted to Cadet Lance Corporal in Bangladesh National Cadet Corps — structured command discipline and operational leadership.",
      }
    ] as const satisfies readonly MetricItem[],
  } as const,
  about: {
    id: "about",
    eyebrow: "Profile Pattern",
    title: "Systems leadership.",
    highlightedText: "Built through evidence.",
    description:
      "My work sits at the intersection of technical implementation, organizational systems, and operational responsibility. I build infrastructure that makes institutions more legible, more efficient, and more useful — grounded in real deployments and structured practice.",
    narrativeTitle: "The Narrative",
    timeline: [
      {
        phase: "2024",
        title: "Systems Foundation & Treasury Operations",
        description:
          "Initiated organizational digitalization pipelines. Built database sync reporting tools reducing DCCNSC financial audit durations to <1s. Appointed Executive Treasurer of DCCNSC and enlisted in BNCC cadet operations.",
        tone: "teal",
      },
      {
        phase: "2025",
        title: "Scientific Leadership & Civic Engagement",
        description:
          "Physics Olympiad National Finalist, 1st Place ECO Spark Challenge, 2nd Place CSE Fest IT Quiz, and Earth Olympiad Divisional Topper. Assisted operational coordination for the DCC 34th Annual Cultural Competition and participated in the national Youth & Climate Manifesto Forum.",
        tone: "primary",
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
          "A full-stack treasury management platform engineered from direct treasurer experience — structured financial data processing, audit tooling, and secure operational reporting at finance.dccnsc.org.",
        tags: ["Process Organization", "Efficiency"],
        mediaClass: "project__media--code",
        imageUrl: "/finance-preview.png",
        link: "https://finance.dccnsc.org",
        caseStudy: {
          problem: "Club treasury ledgers were physical or basic spreadsheet files, causing data delays and auditing latencies of up to 3 days.",
          role: "Executive Treasurer & Systems Engineer",
          solution: "Built a full-stack treasury platform with Python data pipelines, PostgreSQL backend, and TypeScript frontend — deployed with 144 production releases.",
          impact: "Eliminated manual ledger errors entirely; reduced institutional financial statement audit duration from 3 days to under 1 second.",
          technologies: ["TypeScript", "JavaScript", "Python", "PLpgSQL / PostgreSQL", "CSS", "Shell Scripts"],
          challenges: "Ensuring the interface layout is highly intuitive so that future student treasurers can manage sync operations without database training.",
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
        title: "BDOC Physics Olympiad 2025",
        meta: "National Finalist",
        description:
          "Qualified as a national finalist in the BDOC Physics Olympiad. Excels in classical mechanics and electromagnetism, applying physics principles to engineering-oriented problem solving and logical reasoning.",
      },
      {
        icon: "EAR",
        title: "National Earth Olympiad 2025",
        meta: "Divisional Topper / July 2025",
        description:
          "Recognized as a Divisional Topper by the Bangladesh Youth Environmental Initiative (BYEI) for expertise in climate dynamics, environmental sustainability, resource management, and ecosystem sciences. ID: 16353.",
        metaTone: "blue",
      },
      {
        icon: "ECO",
        title: "ECO Spark Challenge 1.0",
        meta: "First Place (1st) / 2025",
        description:
          "Achieved 1st Place in the ECO Spark Challenge 1.0 Quiz Competition organized by Dhaka Commerce College Nature Study Club, demonstrating advanced understanding of ecological problem solving and environmental systems.",
      },
      {
        icon: "IT",
        title: "DCC Intra College CSE Fest 2025",
        meta: "IT Quiz (2nd Place) / May 18-19, 2025",
        description:
          "Secured 2nd place in the individual Junior IT Quiz organized by Dhaka Commerce College Programming Society (DCCPS), testing general IT knowledge, programming concepts, and web technology problem solving.",
        metaTone: "blue",
      },
      {
        icon: "SCI",
        title: "1st DCCSC Online Quiz",
        meta: "Achievement / DCC Science Club",
        description:
          "Earned achievement recognition in the STEM-oriented 1st DCCSC Online Quiz, testing analytical thinking capabilities and physical science comprehension.",
      },
      {
        icon: "QZ",
        title: "Bijoy Quiz Competition 2024",
        meta: "University of Dhaka / Dec 16, 2024",
        description:
          "Competed in a high-caliber university-level environment in the Victory Day quiz organized by Shahid Sergeant Zahurul Huq Hall Quiz Club, focusing on national history, liberation war facts, and culture.",
        metaTone: "blue",
      },
      {
        icon: "ENV",
        title: "Environment Quiz Olympiad",
        meta: "Participation / Nov 19, 2024",
        description:
          "Participated in the Environment Quiz Olympiad organized by DCCNSC, strengthening environmental knowledge and competitive confidence as preparation for later quiz championships.",
      }
    ] as const satisfies readonly AwardItem[],
    training: [
      {
        title: "Web Accessibility (UNICEF Agora)",
        meta: "Verified Certification / Dec 26, 2024",
        description:
          "Mastered core principles of screen-reader compatibility, keyboard navigation design, and semantic HTML structure. Influences direct user-focused accessibility guidelines for portals like dccnsc.org. Verification ID: wQE5kUfwA.",
        metaTone: "blue",
      },
      {
        title: "Cyber Hygiene Training",
        meta: "APAC Cybersecurity Fund / May 30, 2025",
        description:
          "Completed security training jointly organized by The Asia Foundation and SAJIDA Foundation (supported by Google.org), covering secure account protection, safe browsing, phishing awareness, and responsible digital behavior.",
      },
      {
        title: "Workplace Communication Essentials",
        meta: "Passport to Earning BD / June 15, 2025",
        description:
          "Completed communication and leadership readiness training offered by UNICEF Passport to Earning Bangladesh and Wadhwani Foundation, focusing on workplace collaboration, teamwork, and structured writing.",
        metaTone: "blue",
      },
      {
        title: "Manifesto Talk — Youth, Environment & Climate",
        meta: "Discussion Forum / May 31, 2025",
        description:
          "Participated in discussions alongside representatives connected to the interim government at the Department of Environment, focusing on climate innovation, sustainability policies, and active youth leadership.",
      }
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
        impact: "Perticipated platoon drills, physical readiness, and digital Platoon coordination.",
        details: [
          "Promoted to LCpl based on discipline, command authority, and training",
          "Perticipated platoon squad movements, physical readiness programs, and community support drills",
          "Gained foundational leadership experience and operational discipline in a structured, hierarchical organization"
        ],
        icon: "BNCC",
      },
      {
        role: "Environmental Executive",
        organization: "Earth & Nature Initiatives",
        period: "2024 - Present",
        impact: "Led Divisional Earth Olympiad programs and spearheaded campus ecology workshops.",
        details: [
          "Become Divisional Topper in the National Earth Olympiad, demonstrating deep expertise in earth sciences and sustainability",
          "wrote and presented educational content on ecological geology, climate change, and conservation for student audiences",
          "perticipated in environmental initiatives and workshops to promote sustainability awareness on campus and in the community"
        ],
        icon: "EARTH",
      },
      {
        role: "Cultural Competition Operations Volunteer",
        organization: "Dhaka Commerce College",
        period: "Nov 5 - 11, 2025",
        impact: "Assisted in operational coordination and event execution during the 34th Annual Cultural Competition.",
        details: [
          "Awarded Certificate of Appreciation for volunteering service, operational coordination, and participant logistics (Class XII, Roll S10064)",
          "Supported crowd control, scheduling alignments, and coordinated active stage flows in a high-attendance event venue",
          "Collaborated directly with college administration to ensure standard operational guidelines were maintained"
        ],
        icon: "OPS",
      }
    ] as const satisfies readonly LeadershipItem[],
  } as const,
  skills: {
    id: "skills",
    title: "Technical Arsenal.",
    description:
      "A practical capability map across development, design, systems thinking, communication, and the deeper technical specialization I am building next.",
    groups: [
      { icon: "</>", title: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Vite", "Semantic HTML5", "Responsive CSS"] },
      { icon: "DB", title: "CMS & Backend", items: ["WordPress (PHP)", "Python", "PLpgSQL / PostgreSQL", "SQLite", "XAMPP / Local Deploy", "Shell Scripts"] },
      { icon: "ACC", title: "Engineering Practices", items: ["Accessibility-first design (UNICEF Certified)", "Responsive systems architecture", "Operational UI design", "Web performance optimization", "CI/CD via GitHub Actions"] },
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
      { label: "GitHub", value: "github.com/maherukhislam", href: "https://github.com/maherukhislam" },
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
      { label: "GitHub", href: "https://github.com/maherukhislam" },
      { label: "Resume", href: "#contact" },
    ] as const,
  } as const,
  techStack: {
    id: "tech-stack",
    title: "Technical Stack",
    groups: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Vite", "Semantic HTML5"] },
      { category: "CMS & Backend", items: ["WordPress (PHP)", "Python", "PLpgSQL / PostgreSQL", "SQLite", "XAMPP"] },
      { category: "Engineering Practices", items: ["Accessibility-first (UNICEF)", "Responsive systems", "Operational UI architecture", "Web performance", "Git / CI-CD"] },
    ] as const satisfies readonly TechStackGroup[],
  } as const,
  operationalTimeline: [
    { date: "2024", event: "Enrolled in BNCC Cadet Program", category: "Military", tone: "teal" },
    { date: "2024", event: "Appointed Executive Treasurer, DCC Nature Study Club", category: "Leadership", tone: "primary" },
    { date: "Dec 2024", event: "UNICEF Web Accessibility Certification (ID: wQE5kUfwA)", category: "Engineering", tone: "teal" },
    { date: "Dec 2024", event: "Bijoy Quiz — University of Dhaka (Victory Day)", category: "Academic", tone: "primary" },
    { date: "2025", event: "Physics Olympiad National Finalist (BDOC)", category: "Science", tone: "teal" },
    { date: "May 2025", event: "ECO Spark Challenge 1.0 — 1st Place Winner", category: "Environment", tone: "primary" },
    { date: "May 18–19, 2025", event: "DCC CSE Fest IT Quiz — 2nd Place (DCCPS)", category: "Engineering", tone: "teal" },
    { date: "May 30, 2025", event: "APAC Cyber Hygiene Training (Google.org / SAJIDA Foundation)", category: "Training", tone: "primary" },
    { date: "May 31, 2025", event: "Youth & Climate Manifesto Forum — Dept. of Environment", category: "Civic", tone: "teal" },
    { date: "Jun 15, 2025", event: "Workplace Communication — UNICEF Passport to Earning BD", category: "Training", tone: "primary" },
    { date: "Jul 2025", event: "Earth Olympiad Divisional Topper (BYEI ID: 16353)", category: "Science", tone: "teal" },
    { date: "2025", event: "Promoted to Cadet Lance Corporal (BNCC)", category: "Military", tone: "primary" },
    { date: "Nov 5–11, 2025", event: "DCC 34th Annual Cultural Competition Volunteer", category: "Leadership", tone: "teal" },
  ] as const satisfies readonly OperationalTimelineEntry[],
  engineeringNotes: [
    {
      title: "How I Structured Treasury Reporting",
      date: "2025-05",
      excerpt: "Moving from physical ledgers to a Python + PLpgSQL sync pipeline — designing for future treasurers with no database training.",
      tags: ["Treasury", "PLpgSQL", "Systems Design"],
    },
    {
      title: "Improving Accessibility Focus Systems",
      date: "2024-12",
      excerpt: "Applying UNICEF Agora training to real portals — keyboard navigation patterns, focus ring design, and semantic landmark structure.",
      tags: ["Accessibility", "Frontend", "WCAG"],
    },
    {
      title: "Lessons from Organizational Infrastructure",
      date: "2025-03",
      excerpt: "Building dccnsc.org — balancing admin usability, content management, and institutional trust signals in a live club portal.",
      tags: ["WordPress", "CMS", "Systems Thinking"],
    },
  ] as const satisfies readonly EngineeringNote[],
};
