export default function ProjectCard({ imageUrl, title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full aspect-square overflow-hidden cursor-pointer"
      aria-label={`Visita il progetto ${title}`}
    >
      {/* Immagine del progetto */}
      <img
        src={imageUrl}
        alt={title || "Anteprima progetto"}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Overlay con contenuto testuale */}
      <article className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 opacity-0 group-hover:opacity-100 px-4 text-center transition-opacity duration-300">
        <h3 className="mb-2 font-bold text-white text-xl">{title}</h3>
        <p className="mb-4 text-white text-sm">{description}</p>
        <span className="text-[#e3e3e3] text-xs uppercase tracking-wide">
          Clicca per visitare
        </span>
      </article>
    </a>
  );
}
