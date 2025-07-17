export default function Section({ id, children }) {
  return (
    <section id={id} className="pt-[100px] text-white">
      {children}
    </section>
  );
}
