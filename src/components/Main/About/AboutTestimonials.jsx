import TestimonialCard from "./TestimonialCard.jsx";
import testimonials from "../../../data/testimonials.json";

export default function AboutTestimonials() {
  return (
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
  );
}
