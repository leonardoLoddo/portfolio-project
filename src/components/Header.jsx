import { ChevronDownIcon } from "@heroicons/react/24/solid";
import BackgroundVideo from "./BackgroundVideo";
import HeaderContent from "./HeaderContent";

export default function Header() {
  return (
    <header className="top-0 left-0 z-10 fixed flex flex-col justify-center md:justify-center items-center md:items-end w-full h-screen overflow-hidden md:text-left text-center">
      <BackgroundVideo />
      <HeaderContent />
      <div className="bottom-4 z-10 absolute w-full text-center">
        <a
          href="#projects"
          className="inline-flex justify-center text-[#e3e3e3] no-underline hover:line-through uppercase tracking-widest"
        >
          <ChevronDownIcon className="w-10 h-10 text-[#e3e3e3]" />
        </a>
      </div>
    </header>
  );
}
