import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="top-0 left-0 z-50 fixed bg-gray-900/10 backdrop-blur w-full text-white">
      <div className="flex justify-between items-center mx-auto px-4 h-20 container">
        <a
          href="#"
          className="font-semibold text-lg decoration-white no-underline hover:line-through"
        >
          LODDO
        </a>

        {/* Hamburger - solo su mobile */}
        <button
          className="md:hidden z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <XMarkIcon className="w-7 h-7 text-white" />
          ) : (
            <Bars3Icon className="w-7 h-7 text-white" />
          )}
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-4 text-sm uppercase list-none">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item !== "Home" ? item.toLowerCase() : ""}`}
                className="decoration-white no-underline hover:line-through"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu mobile dropdown */}
      {isOpen && (
        <div className="md:hidden top-20 left-0 z-40 absolute flex flex-col items-center bg-gray-900/10 backdrop-blur py-6 w-full">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item !== "Home" ? item.toLowerCase() : ""}`}
              className="hover:bg-gray-900/50 py-2 w-full h-full hover:font-bold text-white text-lg text-center no-underline hover:line-through uppercase"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
