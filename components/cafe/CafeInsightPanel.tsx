import { mockCafeInsights } from "../../lib/cafeData";

export default function CafeInsightPanel() {
  return (
    <div className="rounded-[2rem] border border-lime-200 bg-lime-50 p-5 shadow-sm">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-green-700">
        Runnerbot 2 insights
      </p>
      <h3 className="mt-2 text-2xl font-black text-black">
        Operational intelligence
      </h3>
      <div className="mt-5 space-y-3">
        {mockCafeInsights.map((insight) => (
          <div key={insight.id} className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <p className="font-black text-black">{insight.title}</p>
              <span className="rounded-full bg-black px-3 py-1 text-xs font-bold text-lime-300">
                {insight.priority}
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-600">{insight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
