import socialLinks from "../../data/socialLinks.json";
import {
  Mail,
  Phone,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  ChevronDown,
} from "lucide-react";
export default function HeaderNav() {
  return (
    <>
      {/* FRECCIA CENTRALE */}
      <div className="bottom-4 left-1/2 z-20 absolute text-center -translate-x-1/2">
        <a
          href="#projects"
          className="inline-flex justify-center text-[#e3e3e3] no-underline hover:line-through uppercase tracking-widest animate-bounce"
        >
          <ChevronDown className="w-10 h-10" />
        </a>
      </div>

      {/* CONTATTI + SOCIAL */}
      <div className="hidden bottom-0 z-10 absolute md:flex w-full h-20 text-[#e3e3e3] text-sm">
        <div className="flex justify-between items-center mx-auto px-4 container">
          {/* CONTATTI */}
          <div className="flex items-center gap-4">
            <a href={socialLinks.email} className="hover:text-white">
              <Mail className="w-5 h-5" />
            </a>
            <a href={socialLinks.phone} className="hover:text-white">
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
