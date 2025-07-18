import selfieImg from "../../../assets/selfie.jpg";
import { HiOutlineDownload } from "react-icons/hi";

export default function AboutIntro() {
  return (
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
          <a
            href="/cvLeonardoLoddo.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 mt-4 px-4 py-2 rounded font-semibold text-white text-sm uppercase transition duration-300"
          >
            <HiOutlineDownload className="w-5 h-5" />
            Scarica il CV
          </a>
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
  );
}
