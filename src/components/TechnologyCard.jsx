const BADGE_STYLES = {
  Popular: "bg-sky-50 text-sky-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-600",
  "Full-Stack": "bg-violet-50 text-violet-600",
  Standard: "bg-emerald-50 text-emerald-600",
  Minimal: "bg-emerald-50 text-emerald-600",
  "Top SQL": "bg-sky-50 text-sky-600",
  Cache: "bg-rose-50 text-rose-600",
  NoSQL: "bg-emerald-50 text-emerald-600",
  Ubiquitous: "bg-amber-50 text-amber-600",
  Essential: "bg-sky-50 text-sky-600",
  Robust: "bg-slate-100 text-slate-600",
  Modern: "bg-sky-50 text-sky-600",
  Containers: "bg-sky-50 text-sky-600",
};

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" className="text-amber-400">
      <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8L10 1.5z" />
    </svg>
  );
}

export default function TechnologyCard({ tech, isAdded, onAdd }) {
  const badgeClass = BADGE_STYLES[tech.badge] || "bg-slate-100 text-slate-600";

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-slate-50">
          <img
            src={tech.icon}
            alt=""
            className="h-6 w-6 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.textContent = tech.name.charAt(0);
            }}
          />
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${badgeClass}`}>
          {tech.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold text-slate-900">{tech.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{tech.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <span className="rounded-md bg-slate-100 px-2 py-1 font-medium text-slate-600">
          {tech.category}
        </span>
        <span>{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-slate-700">
          <StarIcon />
          {tech.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`focus-ring mt-4 w-full rounded-lg py-2.5 text-sm font-semibold transition-colors ${
          isAdded
            ? "cursor-not-allowed bg-emerald-50 text-emerald-600"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
