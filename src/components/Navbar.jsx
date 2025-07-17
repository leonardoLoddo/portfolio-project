export default function Navbar() {
  return (
    <nav className="top-0 left-0 z-50 fixed flex justify-between items-center bg-gray-900/10 px-6 w-full h-20 text-white">
      <div className="logo">
        <a
          href="#"
          className="font-semibold text-lg decoration-white no-underline hover:line-through"
        >
          LODDO
        </a>
      </div>
      <ul className="flex gap-2 mb-0 text-sm uppercase list-none">
        <li>
          <a
            href="#"
            className="decoration-white no-underline hover:line-through"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="decoration-white no-underline hover:line-through"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="decoration-white no-underline hover:line-through"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="decoration-white no-underline hover:line-through"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
