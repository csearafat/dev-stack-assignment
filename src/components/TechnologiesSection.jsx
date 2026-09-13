import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import LoadingState from "./LoadingState";

export default function TechnologiesSection({
  technologies,
  isLoading,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}) {
  const addedIds = new Set(stack.map((tech) => tech.id));

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Explore the <span className="text-brand-gradient">Technologies</span>
        </h2>
        <p className="mt-3 text-slate-500">Pick one technology per category to build your ideal stack.</p>
      </div>

      {isLoading ? (
        <LoadingState />
      ) : (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_320px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                isAdded={addedIds.has(tech.id)}
                onAdd={onAdd}
              />
            ))}
          </div>

          <YourStack stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
        </div>
      )}
    </section>
  );
}
