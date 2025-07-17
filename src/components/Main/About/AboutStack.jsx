import stackData from "../../../data/stackData.js";

export default function AboutStack() {
  return (
    <div className="bg-black/30 py-[25px]">
      <div className="mx-auto px-4 container">
        <h3 className="mb-10 font-extrabold text-white text-2xl md:text-3xl text-center uppercase tracking-[1rem]">
          Il mio stack
        </h3>
        <div className="gap-10 grid md:grid-cols-3">
          {Object.entries(stackData).map(([category, tools]) => (
            <div
              key={category}
              className="animate-fade-in-up duration-500 delay-[100ms]"
            >
              <h4 className="mb-4 font-bold text-white text-lg uppercase tracking-widest">
                {category}
              </h4>
              <ul className="flex flex-wrap gap-4">
                {tools.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg"
                  >
                    <Icon className="text-white text-xl" />
                    <span className="text-white text-sm">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
