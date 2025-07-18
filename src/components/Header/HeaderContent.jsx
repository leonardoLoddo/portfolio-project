import React from "react";
import Typewriter from "typewriter-effect";

export default function HeaderContent() {
  return (
    <div className="z-10 md:mx-auto md:px-4 md:container">
      <h1 className="font-extrabold text-white text-4xl md:text-6xl leading-tight tracking-[0.5rem]">
        LEONARDO
        <br />
        LODDO
      </h1>

      <div className="flex items-center gap-2 mt-4 text-[#e3e3e3] text-lg tracking-[0.5rem]">
        <span>Web</span>
        <span className="font-bold" aria-live="polite">
          <Typewriter
            options={{
              strings: ["Developer", "Designer", "Instructor"],
              autoStart: true,
              loop: true,
              delay: 150,
              deleteSpeed: 50,
              pauseFor: 1200,
            }}
          />
        </span>
      </div>
    </div>
  );
}
