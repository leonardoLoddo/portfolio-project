import HeaderBackgroundVideo from "./HeaderBackgroundVideo";
import HeaderContent from "./HeaderContent";
import HeaderNav from "./HeaderNav";

export default function HeaderLayout() {
  return (
    <header className="top-0 left-0 z-10 fixed flex flex-col justify-center md:justify-center items-center md:items-end w-full h-[100dvh] overflow-hidden md:text-left text-center">
      <HeaderBackgroundVideo />
      <HeaderContent />
      <HeaderNav />
    </header>
  );
}
