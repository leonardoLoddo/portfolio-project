import TestimonialCard from "./TestimonialCard";
import testimonials from "../../data/testimonials.json";
import stackData from "../../data/stackData.js";
import selfieImg from "../../assets/selfie.webp";

export default function AboutSection() {
  return (
    <>
      {/* Sezione Introduttiva */}
      <div className="mx-auto mb-4 px-4 pb-[25px] container">
        <div className="flex md:flex-row flex-col items-center gap-6 md:gap-12">
          {/* Testo */}
          <div className="md:w-1/2">
            <h2 className="font-extrabold text-white text-2xl md:text-3xl uppercase tracking-[0.5rem]">
              Chi sono
            </h2>
            <p className="mb-4 text-[#e3e3e3]">
              Sviluppatore web con esperienza anche nel ruolo di docente, unisco
              la passione per il codice alla voglia di condividere conoscenza.
              Curioso per natura, nerd per vocazione: ogni progetto è per me
              un’occasione per imparare, migliorare e costruire qualcosa che
              funzioni davvero
              <span className="font-bold"> — e che abbia stile.</span>
            </p>
          </div>

          {/* Immagine */}
          <div className="flex justify-center md:w-1/2">
            <img
              src={selfieImg}
              alt="Leonardo Loddo"
              className="shadow-lg rounded-full w-full max-w-[250px] h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Sezione Stack Tecnologico */}
      <div className="bg-black/30 py-[25px]">
        <div className="mx-auto px-4 container">
          <h3 className="mb-10 font-extrabold text-white text-2xl md:text-3xl text-center uppercase tracking-[1rem]">
            Il mio stack
          </h3>
          <div className="gap-10 grid md:grid-cols-3">
            {Object.entries(stackData).map(([category, tools]) => (
              <div
                key={category}
                className="animate-fade-in-up duration-500 delay-[100ms]"
              >
                <h4 className="mb-4 font-bold text-white text-lg uppercase tracking-widest">
                  {category}
                </h4>
                <ul className="flex flex-wrap gap-4">
                  {tools.map(({ name, icon: Icon }) => (
                    <li
                      key={name}
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg"
                    >
                      <Icon className="text-white text-xl" />
                      <span className="text-white text-sm">{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sezione Testimonianze */}
      <div className="mx-auto my-4 px-4 py-[25px] container">
        <h3 className="mb-8 font-extrabold text-white text-2xl md:text-3xl text-center uppercase tracking-[1rem]">
          Dicono di me
        </h3>
        <div className="gap-8 grid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </>
  );
}
