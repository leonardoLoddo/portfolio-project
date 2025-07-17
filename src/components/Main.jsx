// File: components/Main.jsx

import ProjectsSection from "./ProjectsSection";
import Section from "./Section";

export default function Main() {
  return (
    <main className="z-10 relative bg-black/50 mt-[100vh] min-h-[100vh]">
      <Section id="projects">
        <ProjectsSection />
      </Section>
    </main>
  );
}
