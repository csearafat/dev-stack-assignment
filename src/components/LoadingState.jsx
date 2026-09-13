export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-slate-400">
      <span className="bg-brand-gradient h-10 w-10 animate-spin rounded-full [mask:radial-gradient(farthest-side,transparent_60%,#000_61%)]" />
      <p className="text-sm font-medium">Loading technologies…</p>
    </div>
  );
}
