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
          className="md:hidden z-50 transition-transform duration-300"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          >
            {isOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <Menu className="w-7 h-7 text-white" />
            )}
          </div>
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
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-6 w-full">
          {/* Link section */}
          {["Home", "Projects", "About", "Contact"].map((item, index) => (
            <a
              key={item}
              href={`#${item !== "Home" ? item.toLowerCase() : ""}`}
              className={`hover:bg-gray-900/50 py-2 w-full h-full hover:font-bold text-white text-lg text-center no-underline hover:line-through uppercase transition-all duration-300 transform ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
              }}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}

          {/* Icon section */}
          <div
            className={`flex flex-wrap justify-center gap-6 mt-6 text-white text-sm transition-all duration-500 transform ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: isOpen ? "400ms" : "0ms",
            }}
          >
            {/* Contatti */}
            <a
              href={socialLinks.email}
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.phone}
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            {/* Social */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
