export default function TestimonialCard({ name, role, feedback }) {
  return (
    <div className="bg-white/5 shadow-md hover:shadow-lg backdrop-blur-sm p-6 border border-white/10 rounded-2xl text-[#e3e3e3] transition-all duration-300">
      <blockquote className="before:top-0 before:left-0 before:absolute relative pl-6 before:text-[#e3e3e3]/40 before:text-4xl italic before:content-['“']">
        {feedback}
      </blockquote>
      <div className="mt-4">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-[#e3e3e3]/70 text-sm">{role}</p>
      </div>
    </div>
  );
}
