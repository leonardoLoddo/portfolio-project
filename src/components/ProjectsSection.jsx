import ProjectCard from "./ProjectCard";
import projects from "../projects.json";

export default function ProjectsSection() {
  return (
    <>
      <div className="mx-auto px-4 container">
        <h2 className="font-extrabold text-white text-2xl md:text-3xl uppercase tracking-[1rem]">
          I miei Progetti
        </h2>
        <p className="mb-[100px] text-[#e3e3e3]">
          Questi sono alcuni tra i miei lavori più recenti <br />
          <span className="font-bold">
            Clicca sui riquadri visitare le pagine
          </span>
        </p>
      </div>

      <div className="gap-0 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </>
  );
}
