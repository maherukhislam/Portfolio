import { Background } from "./components/Background";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AboutSection } from "./components/sections/AboutSection";
import { AchievementsSection } from "./components/sections/AchievementsSection";
import { EducationSection } from "./components/sections/EducationSection";
import { HeroSection } from "./components/sections/HeroSection";
import { HighlightsSection } from "./components/sections/HighlightsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { VisionSection } from "./components/sections/VisionSection";
import { portfolioData } from "./data/mockData";
import { useActiveSection } from "./hooks/useActiveSection";
import { useMobileNav } from "./hooks/useMobileNav";
import { useScrollReveal } from "./hooks/useScrollReveal";

function App() {
  const sectionIds = ["home", "projects", "education", "achievements", "skills", "vision", "about", "contact"];
  const activeSection = useActiveSection(sectionIds);
  const { isOpen, closeMenu, toggleMenu } = useMobileNav();
  useScrollReveal();

  return (
    <>
      <Background />
      <Header
        activeSection={activeSection}
        isMenuOpen={isOpen}
        navItems={portfolioData.navigation}
        onCloseMenu={closeMenu}
        onToggleMenu={toggleMenu}
      />
      <main>
        <HeroSection data={portfolioData.hero} />
        <HighlightsSection data={portfolioData.highlights} />
        <AboutSection data={portfolioData.about} />
        <ProjectsSection data={portfolioData.projects} />
        <EducationSection data={portfolioData.education} />
        <AchievementsSection data={portfolioData.achievements} />
        <SkillsSection data={portfolioData.skills} />
        <VisionSection data={portfolioData.vision} />
        <ContactSection data={portfolioData.contact} />
      </main>
      <Footer data={portfolioData.footer} />
    </>
  );
}

export default App;
