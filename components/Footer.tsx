export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-black text-slate-950">Runners Errands</p>
            <p className="text-sm font-bold text-slate-500">
              Lagos, Nigeria • Powered by Runnerbot 2
            </p>
          </div>
          <p className="text-sm font-medium text-slate-500">
            Trust is the product. Convenience is the feature. Speed is the proof.
          </p>
        </div>
      </div>
    </footer>
  );
}
