import { useState } from "react";
import socialLinks from "../data/socialLinks.json";
import {
  Menu,
  X,
  Mail,
  Phone,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="top-0 left-0 z-50 fixed bg-gray-900/10 backdrop-blur w-full text-white">
      <div className="flex justify-between items-center mx-auto px-4 h-20 container">
        {/* Logo */}
        <a
          href="#"
          className="font-semibold text-lg decoration-white no-underline hover:line-through"
        >
          LODDO
        </a>

        {/* Hamburger menu */}
        <button
          className="md:hidden z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <Menu className="w-7 h-7 text-white" />
          )}
        </button>

        {/* Desktop menu */}
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

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center py-6 w-full">
          {/* Link section */}
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

          {/* Icon section */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-white text-sm">
            {/* Contatti */}
            <a href={socialLinks.email} className="hover:text-gray-300">
              <Mail className="w-5 h-5" />
            </a>
            <a href={socialLinks.phone} className="hover:text-gray-300">
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            {/* Social */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
