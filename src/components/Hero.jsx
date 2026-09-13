import heroImage from "../assets/hero-stack.png";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pt-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare them side by
            side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              className="focus-ring bg-brand-gradient rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02]"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="focus-ring rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="Illustration of a layered technology stack"
            className="w-64 sm:w-80 lg:w-96"
          />
        </div>
      </div>
    </section>
  );
}
