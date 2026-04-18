import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Certificates } from "../components/Certificates";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { EducationSection } from "../components/EducationSection";
import { LeetCodeSection } from "../components/LeetCodeSection";
import { FigmaDesigns } from "../components/FigmaDesigns";
import { Hackathons } from "../components/Hackathons";
import { Achievements } from "../components/Achievements";
import { ResumeSection } from "../components/ResumeSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <FigmaDesigns />
        <Certificates />
        <Hackathons />
        <Achievements />
        <ResumeSection />
        <EducationSection />
        <LeetCodeSection />
        <ContactSection />
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
