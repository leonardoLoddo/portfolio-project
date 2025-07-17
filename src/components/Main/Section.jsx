export default function Section({ id, children, ...props }) {
  return (
    <section id={id} {...props}>
      {children}
    </section>
  );
}
