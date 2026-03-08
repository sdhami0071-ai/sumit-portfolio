import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkExperience from "@/components/WorkExperience";
import ToolsAnalytics from "@/components/ToolsAnalytics";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WorkExperience />
      <ToolsAnalytics />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
