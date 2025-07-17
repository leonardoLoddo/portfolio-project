import AboutSection from "./About/AboutSection";
import ProjectsSection from "./Projects/ProjectsSection";
import Section from "./Section";

export default function MainLayout() {
  return (
    <main className="z-10 relative bg-black/50 backdrop-blur-xl mt-[100vh] min-h-[100vh]">
      <Section id="projects" className="pt-[100px]">
        <ProjectsSection />
      </Section>
      <Section
        id="about"
        className="bg-gradient-to-b from-transparent to-[#dfdbd3]/50 py-[100px]"
      >
        <AboutSection />
      </Section>
    </main>
  );
}
