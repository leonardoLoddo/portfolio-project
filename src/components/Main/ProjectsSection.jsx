import ProjectCard from "./ProjectCard";
import projects from "../../data/projects.json";

export default function ProjectsSection() {
  return (
    <>
      <div className="mx-auto mb-4 px-4 pb-[50px] container">
        <div className="md:w-1/2">
          <h2 className="font-extrabold text-white text-2xl md:text-3xl uppercase tracking-[0.5rem]">
            I miei Progetti
          </h2>
          <p className="text-[#e3e3e3]">
            Dai videogiochi agli e-commerce, passando per la gestione del tempo
            e dei team: ogni progetto qui è una sfida risolta con cura, codice e
            una ricerca costante di efficienza e bellezza. <br />
            Ogni riga punta a coniugare innovazione e semplicità. <br /> <br />
            <span className="font-bold">
              Clicca sui riquadri visitare le pagine
            </span>
          </p>
        </div>
      </div>

      <div className="gap-0 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-full">
        {projects.length === 0 ? (
          <p className="text-white text-center">Nessun progetto disponibile.</p>
        ) : (
          projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))
        )}
      </div>
    </>
  );
}
